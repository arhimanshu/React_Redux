import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice(
    {
        name:"cart",
        initialState:[],
        reducers:{
            show(state){
                return state
            },
            add(state,action){
                state.push(action.payload);
            },
            remove(state,action){
                state.filter((x)=>x.id==action.payload);
            }
        }
    }
)
export default cartSlice.reducer;
export const {show,add,remove} =cartSlice.actions;