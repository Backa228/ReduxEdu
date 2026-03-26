import { createAsyncThunk } from "@reduxjs/toolkit"
import { supabase } from "../../supabaseClient"
//LOGIN
export const logIn = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
        const { data, error } = await supabase
        .auth
        .signInWithPassword({
            email,
            password
        })

      if (error) throw error;

      return ;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//LOGOUT
export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
        const { error } = await supabase.auth.signOut()

      if (error) throw error;

      return ;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//REGISTOR
export const register = createAsyncThunk(
  "auth/registor",
  async ({ email, password }, thunkAPI) => {
    try {
        const { data, error } = await supabase
        .auth
        .signUp({
            email,
            password
        })

      if (error) throw error;

      return ;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//REFRESH USER
export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    try {
        const { data, error } = await supabase.auth.getUser()

        if (error) throw error;
        if(!data.user) throw new Error("No user found")

      return data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);