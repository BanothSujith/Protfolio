import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function ContactSection({ theme }) {
    // 🔥 CONTACT DATA
    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            value: "banothsujith4@gmail.com",
            link: "mailto:banothsujith4@gmail.com",
        },
        {
            icon: <Phone className="w-5 h-5" />,
            value: "+91 7995037426",
            link: "tel:+917995037426",
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            value: "Mahabubabad, India",
            link: "https://maps.google.com/?q=Mahabubabad,India",
        },
    ];

    // 🔥 FORM FIELDS
    const formFields = [
        { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
        { name: "email", label: "Your Email", type: "email", placeholder: "john@example.com" },
    ];

    // 🔥 STATE
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    // ✅ VALIDATION (FIXED)
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    const isFormValid =
        formData.name.trim() !== "" &&
        formData.email.trim() !== "" &&
        emailValid &&
        formData.message.trim() !== "";

    // 🔥 HANDLE CHANGE
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // 🔥 SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid) {
            alert("Please fill all fields correctly ⚠️");
            return;
        }

        setLoading(true);

        try {
            const res = await axios.post(
                "https://whatsappnotification-riy5.onrender.com/api/v1/notify",
                formData
            );

            // console.log(res);

            alert("Message sent successfully 🚀");

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (err) {
            console.error(err);
            alert("Something went wrong please resubmit the form...!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.section 
        id="contact"
            layout
        className="py-20 lg:w-[80%] px-6 bg-gradient-to-tr from-cardBg via-transparent to-transparent ring-2 ring-border shadow-2xl shadow-shadow2 rounded-[4rem] lg:px-32 my-12">
            <div className="mx-auto grid md:grid-cols-2 items-center gap-16">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl lg:text-6xl font-bold">
                        Let's{" "}
                        <span className="bg-gradient-to-r from-fromName/40 to-toName/70 bg-clip-text text-transparent">
                            Connect
                        </span>
                    </h2>

                    <p className="text-text-primary/70 font-semibold text-lg max-w-md">
                        Open for opportunities and collaborations. Let’s build something great.
                    </p>

                    {/* CONTACT MAP */}
                    <div className="space-y-6 pt-4">
                        {contactInfo.map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.link}
                                target={item.link.startsWith("http") ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ x: 6 }}
                                className="flex items-center gap-4 text-lg group"
                            >
                                <div className="p-3 ring-2 ring-border rounded-full group-hover:scale-110 transition">
                                    {item.icon}
                                </div>
                                <span className="group-hover:text-fromName transition">
                                    {item.value}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="bg-transparent p-8 rounded-[2rem] shadow-[0px_10px_30px] shadow-shadow2 ring-2 ring-border"
                >
                    <form onSubmit={handleSubmit} className="space-y-5 ">

                        {/* INPUTS */}
                        {formFields.map((field, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <label className="text-sm text-text-primary/80">
                                    {field.label}
                                </label>
                                <input
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className={`w-full mt-2 p-3 rounded-lg ${theme.isDarkMode ? "bg-fromName/15" : "bg-fromName/5"} outline-none 
                  focus:ring-2 focus:ring-fromName transition 
                  hover:ring-2 hover:ring-fromName/40`}
                                />
                            </motion.div>
                        ))}

                        {/* MESSAGE */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <label className="text-sm text-text-primary/80">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="How can I help you?"
                                className={`w-full mt-2 p-3 rounded-lg ${theme.isDarkMode ? "bg-fromName/15" : "bg-fromName/5"} outline-none 
                focus:ring-2 focus:ring-fromName transition 
                hover:ring-2 hover:ring-fromName/40`}
                            />
                        </motion.div>

                        {/* ERROR */}
                        {formData.email && !emailValid && (
                            <p className="text-red-500 text-sm">
                                Enter a valid email
                            </p>
                        )}

                        {/* BUTTON */}
                        <motion.button
                            type="submit"
                            disabled={!isFormValid || loading}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            whileHover={isFormValid ? { scale: 1.05 } : {}}
                            whileTap={isFormValid ? { scale: 0.97 } : {}}
                            style={{ transition: "transform 0.15s ease" }}
                            className={`w-fit px-6 flex items-center  justify-center gap-2 
              py-3 rounded-xl font-semibold transition
              ${isFormValid
                                    ? "bg-toName text-white hover:shadow-lg"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }
              ${loading ? "opacity-60" : ""}
              `}
                        >
                            {loading ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </motion.button>

                    </form>
                </motion.div>

            </div>
        </motion.section>
    );
}