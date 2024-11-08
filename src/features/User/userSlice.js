import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userData = createAsyncThunk("user/userData", async ({ token }) => {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (data.status === 200) {
    return data.body;
  }
  throw new Error(data.status.toString());
});

export const changeUsername = createAsyncThunk(
  "user/changeUsername",
  async ({ token, newUsername }) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: newUsername }),
    });
    const data = await response.json();
    if (data.status === 200) {
      return data.body;
    }
    throw new Error(data.status.toString());
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
    loading: false,
    error: null,
  },
  reducers: {
    clearUserData: (state) => {
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.userName = "";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userData.fulfilled, (state, action) => {
        state.loading = false;
        state.email = action.payload.email;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.userName = action.payload.userName;
      })
      .addCase(userData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changeUsername.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeUsername.fulfilled, (state, action) => {
        state.loading = false;
        state.userName = action.payload.userName;
      })
      .addCase(changeUsername.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { getUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
