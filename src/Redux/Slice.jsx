import { createSlice } from "@reduxjs/toolkit";


const Slice=createSlice({
    name:"slide",
    initialState:{
        slide:"FASHION",
        view:''
    },
    reducers:{
        update:(state,action)=>{
            
    return {...state,slide:action.payload}
        },

        viewSet:(state,action)=>{
           return {...state,view:action.payload}
        },

viewDel:(state,action)=>{
return {...state,view:""}
}

    }
})

export const {update,viewSet,viewDel}=Slice.actions;
export default Slice.reducer;