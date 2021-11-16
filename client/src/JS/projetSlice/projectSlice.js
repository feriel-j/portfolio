import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const projectAdd = createAsyncThunk("portfolio/add", async (project) => {
  try {
    let result = axios.post("http://localhost:5000/portfolio/", project);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const projectGet = createAsyncThunk("portfolio/get", async (project) => {
  try {
    let result = axios.get("http://localhost:5000/portfolio/", project);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const projectDel = createAsyncThunk("portfolio/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/portfolio/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const projectUp = createAsyncThunk(
  "portfolio/update",
  async (id, project) => {
    try {
      let result = axios.put(`http://localhost:5000/portfolio/${id}`, project);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  project: null,
  status: null,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: {
    [projectAdd.pending]: (state) => {
      state.status = "pending";
    },
    [projectAdd.fulfilled]: (state) => {
      state.status = "success";
    },
    [projectAdd.rejected]: (state) => {
      state.status = "fail";
    },
    [projectGet.pending]: (state) => {
      state.status = "pending";
    },
    [projectGet.fulfilled]: (state, action) => {
      state.status = "success";
      state.project = action.payload.data.result;
    },
    [projectGet.rejected]: (state) => {
      state.status = "fail";
    },
    [projectDel.pending]: (state) => {
      state.status = "pending";
    },
    [projectDel.fulfilled]: (state) => {
      state.status = "success";
    },
    [projectDel.rejected]: (state) => {
      state.status = "fail";
    },
    [projectUp.pending]: (state) => {
      state.status = "pending";
    },
    [projectUp.fulfilled]: (state) => {
      state.status = "success";
    },
    [projectUp.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

export default projectSlice.reducer;
