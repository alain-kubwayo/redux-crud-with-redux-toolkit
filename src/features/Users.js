import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";


export const userSlice = createSlice({
    name: "users", // name of the state to be managed
    initialState: {value: UsersData}, // value of initial state: empty array of users objects
    reducers: { // different functions that we can call to provide some sort of actions to our state. e.g. add, delete, and update users
        addUser: (state, action) => {
            // Write code for adding a user
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter(user => user.id !== action.payload.id)
        }, 
        updateUsername: (state, action) => {
            state.value.map(user => {
                if(user.id === action.payload.id){
                    user.username = action.payload.username
                }
            })
        }
    }
})

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;