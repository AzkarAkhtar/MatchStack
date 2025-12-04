import { createSlice } from "@reduxjs/toolkit";

const MyconnectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnections: (state, action) => action.payload,
    removeConnections: () => null,
  },
});

export const { addConnections, removeConnections } = MyconnectionSlice.actions;

export default MyconnectionSlice.reducer;