import { createSlice } from "@reduxjs/toolkit";

const ConnectionSlice = createSlice ({
    
    name:"connect",
    initialState: null,
    reducers: {

        connectUser: (state, action) => {
            return action.payload;
        },
        removeRequest: (state, action) => {
            const newArray = state.filter((r) => r._id !== action.payload);
            return newArray;
         },
    },

});

export const {connectUser,removeRequest} = ConnectionSlice.actions;
export default ConnectionSlice.reducer;