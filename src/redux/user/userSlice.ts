import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersData from "../../mock/users";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersState {
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => {
    return new Promise<User[]>((resolve) => {
      setTimeout(() => resolve(usersData), 1000);
    });
  }
);

export const removeUsers = createAsyncThunk<number, number>(
  "users/removeUsers",
  async (userId) => {
    return new Promise<number>((resolve) => {
      setTimeout(() => resolve(Number((userId))), 500);
    });
  }
);

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      })

      .addCase(removeUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(removeUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default usersSlice.reducer;
