// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// export const contactAdd = createAsyncThunk("contact/add", async ({ text }) => {
//   try {
//     let result = axios.post("http://localhost:5000/contact/", text);
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// });
// // export const contactGet = createAsyncThunk("portfolio/get", async (contact) => {
// //   try {
// //     let result = axios.get("http://localhost:5000/portfolio/", contact);
// //     return result;
// //   } catch (error) {
// //     console.log(error);
// //   }
// // });
// // export const contactDel = createAsyncThunk("portfolio/delete", async (id) => {
// //   try {
// //     let result = axios.delete(`http://localhost:5000/portfolio/${id}`);
// //     return result;
// //   } catch (error) {
// //     console.log(error);
// //   }
// // });
// // export const contactUp = createAsyncThunk(
// //   "portfolio/update",
// //   async (id, contact) => {
// //     try {
// //       let result = axios.put(`http://localhost:5000/portfolio/${id}`, contact);
// //       return result;
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   }
// // );
// const initialState = {
//   contact: null,
//   status: null,
// };

// export const contactSlice = createSlice({
//   name: "contact",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [contactAdd.pending]: (state) => {
//       state.status = "pending";
//     },
//     [contactAdd.fulfilled]: (state) => {
//       state.status = "success";
//     },
//     [contactAdd.rejected]: (state) => {
//       state.status = "fail";
//     },
//     // [contactGet.pending]: (state) => {
//     //   state.status = "pending";
//     // },
//     // [contactGet.fulfilled]: (state, action) => {
//     //   state.status = "success";
//     //   state.contact = action.payload.data.result;
//     // },
//     // [contactGet.rejected]: (state) => {
//     //   state.status = "fail";
//     // },
//     // [contactDel.pending]: (state) => {
//     //   state.status = "pending";
//     // },
//     // [contactDel.fulfilled]: (state) => {
//     //   state.status = "success";
//     // },
//     // [contactDel.rejected]: (state) => {
//     //   state.status = "fail";
//     // },
//     // [contactUp.pending]: (state) => {
//     //   state.status = "pending";
//     // },
//     // [contactUp.fulfilled]: (state) => {
//     //   state.status = "success";
//     // },
//     // [contactUp.rejected]: (state) => {
//     //   state.status = "fail";
//     // },
//   },
// });

// export default contactSlice.reducer;
