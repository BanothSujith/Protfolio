import { createSlice } from '@reduxjs/toolkit';

const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
console.log("Preferred theme:", theme);
const storeSlice = createSlice({
    name:'portfolio',
    initialState:{
        isNavclickcked:false,
        themeType:theme,
    },
    reducers:{
        setIsNavclickcked:(state,action)=>{
            state.isNavclickcked=action.payload;
        }
    }
})


export const {setIsNavclickcked}=storeSlice.actions;

export default storeSlice.reducer;