import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./FeedSlice"
import ConnectReducer from "./ConnectionSlice"
import MyconnectionReducer from "./MyconnectionSlice"


const reduxStore = configureStore({
  reducer: {
    user : userReducer,
    feed : feedReducer,
    connect : ConnectReducer,
    connections: MyconnectionReducer
  },
});

export default reduxStore;