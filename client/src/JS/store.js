import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./projetSlice/contactSlice";
import projectSlice from "./projetSlice/projectSlice";

export const store = configureStore({
  reducer: {
    project: projectSlice,
    contact: contactSlice,
  },
});
