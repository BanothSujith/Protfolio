import { createSlice } from '@reduxjs/toolkit';

const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const storeSlice = createSlice({
    name:'portfolio',
    initialState:{
        isNavclickcked:false,
        themeType:theme,
        currentPath:'home',
    },
    reducers:{
        setIsNavclickcked:(state,action)=>{
            state.isNavclickcked=action.payload;
        },
        setCurrentPath:(state,action)=>{
            state.currentPath=action.payload;
        },
    }
})


export const {setIsNavclickcked,setCurrentPath}=storeSlice.actions;

export default storeSlice.reducer;