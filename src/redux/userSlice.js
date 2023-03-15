import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  userDetails: [],
  user: {},
  value: 0,
};

export const userDetails = createAsyncThunk("details", async () => {
  const useData = await fetch("https://jsonplaceholder.typicode.com/users");
  const parsedData = await useData.json();

  return parsedData;
});
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    Add: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDetails = action.payload;
    });
  },
});

export default userSlice.reducer;
