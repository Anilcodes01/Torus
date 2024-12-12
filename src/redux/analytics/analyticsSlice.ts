import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersData from "../../mock/users";

interface User {
  id: number;
  name: string;
  dateJoined: string;
  region: string;
  isActive: boolean;
}

interface AnalyticsState {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  availableRegions: string[];
  filteredRegion: string | null;
}

interface AnalyticsParams {
  timeRange?: number;
  region?: string | null;
}

interface RootState {
  users: {
    users: User[];
  };
}

const initialState: AnalyticsState = {
  totalUsers: 0,
  activeUsers: 0,
  inactiveUsers: 0,
  status: "idle",
  error: null,
  availableRegions: [],
  filteredRegion: null,
};

export const fetchAnalytics = createAsyncThunk(
  "analytics/fetchAnalytics",
  async ({ timeRange = 12, region = null }: AnalyticsParams, { getState }) => {
    const state = getState() as RootState;
    const currentDate = new Date();
    const cutoffDate = new Date(
      currentDate.setMonth(currentDate.getMonth() - timeRange)
    );

    const currentUsers = state.users?.users || usersData;

    const dateFilteredUsers = currentUsers.filter((user) => {
      const userJoinDate = new Date(user.dateJoined);
      return userJoinDate >= cutoffDate;
    });

    const filteredUsers = region
      ? dateFilteredUsers.filter((user) => user.region === region)
      : dateFilteredUsers;

    const totalUsers = filteredUsers.length;
    const activeUsers = filteredUsers.filter((user) => user.isActive).length;
    const inactiveUsers = totalUsers - activeUsers;

    const availableRegions = [
      ...new Set(currentUsers.map((user) => user.region)),
    ];

    return {
      totalUsers,
      activeUsers,
      inactiveUsers,
      availableRegions,
      filteredRegion: region,
      timeRange,
    };
  }
);

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalytics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnalytics.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.totalUsers = action.payload.totalUsers;
        state.activeUsers = action.payload.activeUsers;
        state.inactiveUsers = action.payload.inactiveUsers;
        state.availableRegions = action.payload.availableRegions;
        state.filteredRegion = action.payload.filteredRegion;
      })
      .addCase(fetchAnalytics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});

export default analyticsSlice.reducer;
