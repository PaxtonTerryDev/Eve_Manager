import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characterID: null,
  name: "",
  location: "",
  corporationID: "",
  securityStatus: "",
  portrait: {},
  accessToken: "",
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setID: (state, action) => {
      state.characterID = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setCorporationID: (state, action) => {
      state.corporationID = action.payload;
    },
    setSecurityStatus: (state, action) => {
      state.securityStatus = action.payload;
    },
    setPortraits: (state, action) => {
      state.portrait = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const {
  setID,
  setName,
  setLocation,
  setCorporationID,
  setSecurityStatus,
  setPortraits,
  setAccessToken,
} = characterSlice.actions;

export default characterSlice.reducer;
