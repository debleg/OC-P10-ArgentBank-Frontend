import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ email, password }) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    //using data.status instead of response.status due to nesting in api response
    if (data.status === 200) {
      return data.body.token;
    }
    throw new Error(data.status.toString());
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.error = null;
    },
    logout: (state) => {
      state.token = null;
      state.error = null;
      //also remove from storage, checking both options
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

//Note to self:
//ExtraReducers: handle the asynchronous part
//"regular" reducers handle the dispatch

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
