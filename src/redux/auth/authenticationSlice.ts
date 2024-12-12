import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import usersData from "../../mock/users";


interface User {
  id: number;
  name: string;
  email: string;
  
}


interface AuthenticationState {
  isAuthenticated: boolean;
  currentUser: User | null;
  error: string | null;
}

const initialState: AuthenticationState = {
  isAuthenticated: false,
  currentUser: null,
  error: null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string }>) => {
      const { email } = action.payload;
      const user = usersData.find((user) => user.email === email);

      if (user) {
        const token = `token-${Math.random().toString(36).substr(2)}`;

        state.isAuthenticated = true;
        state.currentUser = user;
        state.error = null;

        localStorage.setItem("authToken", token);
        localStorage.setItem("currentUser", JSON.stringify(user));
      } else {
        state.error = "Invalid email address";
        state.isAuthenticated = false;
        state.currentUser = null;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.error = null;

      localStorage.removeItem("authToken");
      localStorage.removeItem("currentUser");
    },
  },
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
