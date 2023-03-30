import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers} from '../actions'


const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUsers(state, action) {
            
            // state.push(action.payload);

            return [...state,action.payload]    //In order to update values immutably, your code must make copies of existing objects/arrays, and then modify the copies.

        },
        removeUser(state, action) {

           state.splice(action.payload,1);

        },
        // deleteUsers(state, action) {
        //     return [];
        // }
    },
    extraReducers(builder){
        // builder.addCase(userSlice.actions.deleteUsers,()=>{     //I commented this builder function because here our action is depend on userSlice, so if userSlice got deleted then this extrareducer will not work
        //     return [];
        // })
        builder.addCase(deleteUsers,()=>{
            return [];
        })
    }
})
// console.log(userSlice.reducer);


export default userSlice.reducer; //this is exported in store so that here all states could get stored in store

export const { addUsers ,removeUser} = userSlice.actions; //here i am exporting action creator function so that it can be used in various components