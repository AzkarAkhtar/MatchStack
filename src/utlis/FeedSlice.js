import { createSlice } from "@reduxjs/toolkit";

const FeedSlice = createSlice ({
    
    name:"feed",
    initialState: null,
    reducers: {

        displayFeed: (state, action) => {
            return action.payload;
        },
        removeUserFromFeed: (state, action) => {
      const newFeed = state.filter((user) => user._id !== action.payload);
      return newFeed;
    },
    },

});

export const {displayFeed, removeUserFromFeed} = FeedSlice.actions;
export default FeedSlice.reducer;