import { useState } from 'react';
import bgimg from '../assets/Contact.png'
import SocialMediaLinks from '../components/SocialMediaLinks';
import useInView from '../Hooks/IsInView';
import axios from 'axios';

function Contact() {
    const [ref, isVisible, pageView] = useInView(.2,'0px');
    const [contactData,setContactData] = useState({first_name:"",last_name:"",email:"",message:"",isEmail:false});
   const handlecontactForm = (field, e) => {
     const value = e.target.value;

     if (field === "email") {
       const validEmail = value.includes("@");
       setContactData((prev) => ({
         ...prev,
         email: value, 
         isEmail: validEmail, 
       }));
     } else {
       setContactData((prev) => ({
         ...prev,
         [field]: value,
       }));
     }
   };
    const handlecontactFormSubmit = async (e) =>{
      e.preventDefault();
      console.log(contactData);
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER}api/v1/notify`,
        {
          full_name: contactData.first_name + " " + contactData.last_name,
          // last_name: contactData.last_name,
          email: contactData.email,
          message: contactData.message,
        }
      );
      console.log(res);
      if(contactData.email.length !=0 || contactData.isEmail == true){
        alert("Form submitted successfully!"+contactData.email);
                setContactData({
                  first_name: "",
                  last_name: "",
                  email: "",
                  message: "",
                  isEmail: false,
                });

      }
    }
  return (
    <div
      ref={(ele) => {
        ref.current = ele;
        pageView.current = ele;
      }}
      id="contact"
      className="h-fit md:h-screen lg:h-fit w-full overflow-y-auto scrollbar "
    >
      <div className="w-full h-[40vh] lg:h-[60vh] relative ">
        {/* image part */}

        <img
          src={bgimg}
          alt="contact"
          loading="lazy"
          className="w-full h-full "
        />
        <div className="absolute top-1/3 md:top-1/2 left-0 w-full text-center text-white text-2xl md:text-4xl font-bold font-[Lato] flex flex-col justify-center items-center tracking-widest gap-2 ">
          <p>Hello.</p>
          <p>Let's work together</p>
          <p>on your next project.</p>
        </div>
      </div>
      <div className="bg-surface h-fit flex flex-col md:flex-row gap-8 px-12 py-16">
        {/* below image part */}
        <div className=" w-full  grid gap-12 justify-center font-black   text-[#a1461c] ">
          {/* part1 */}
          <span className=" tracking-widest text-4xl font-[Lato]  ">
            Get in Touch
          </span>
          <span className="px-2 text-2xl opacity-80 ">
            I'd like to hear from you!
          </span>
          <span className="max-w-md tracking-wider leading-loose text-text/50 ">
            If you have any questions, want to say hello, or are interested in
            hiring me, feel free to use the links below or fill out the contact
            form.
          </span>
          <div>
            <SocialMediaLinks isVisible={isVisible} page="Contact" />
          </div>
        </div>
        <div className=" w-full  flex flex-col gap-8">
          {/* part2 */}
          <div className="text-2xl font-bold tracking-wider text-text">
            <span>Contact</span>
          </div>
          <form className="flex flex-col gap-6 p-4  ">
            <div className="flex w-full justify-between flex-wrap gap-4  ">
              <label className="tracking-widest text-text/70 font-bold ">
                First Name:
                <input
                  onChange={(e) => handlecontactForm("first_name", e)}
                  value={contactData?.first_name}
                  type="text"
                  className="appearance-none outline-0 w-full  text-xl font-medium  border-b-2 border-[#8f8f8c] text-text "
                />
              </label>
              <label className="tracking-widest text-text/70 font-bold ">
                Last Name:
                <input
                  onChange={(e) => handlecontactForm("last_name", e)}
                  value={contactData?.last_name}
                  type="text"
                  className="appearance-none outline-0 w-full  text-xl font-medium  border-b-2 border-[#8f8f8c] text-text "
                />
              </label>
            </div>
            <label className="tracking-widest text-text/70 font-bold ">
              Email:
              {contactData.isEmail == false && contactData.email.length > 0 ? (
                <span className="text-red-500 ml-2 text-sm font-normal">
                  (Please enter a valid email)
                </span>
              ) : null}
              <input
                value={contactData?.email}
                onChange={(e) => handlecontactForm("email", e)}
                required
                type="Email"
                className="appearance-none outline-0 w-full  text-xl font-medium  border-b-2 border-[#8f8f8c] text-text "
              />
            </label>
            <label className="tracking-widest text-text/70 font-bold ">
              Write a message:
              <input
                value={contactData?.message}
                onChange={(e) => handlecontactForm("message", e)}
                required
                type="textarea"
                className="appearance-none outline-0 w-full mt-5 text-xl font-medium  border-b-2 border-[#8f8f8c] text-text "
              />
            </label>
            <button
              onClick={(e) => handlecontactFormSubmit(e)}
              className="group mt-2 md:mt-10 w-1/2 lg:w-1/6 text-white bg-black border border-border/15 hover:animate-buttonanimi rounded-xl px-4 py-1 md:px-[4%] md:py-[1%]   overflow-hidden  font-medium  relative z-10  md:text-xl    cursor-pointer "
            >
              <span className="absolute top-0 left-0 bg-[#a1461c] opacity-70 w-full h-full rotate-45 -translate-x-[calc(70%)] group-active:-translate-x-0 group-active:rotate-0  group-hover:-translate-x-0 group-hover:rotate-0 transition-all duration-500 ease-linear lg:group-active:bg-gray-800"></span>
              <span className="relative z-10">Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact