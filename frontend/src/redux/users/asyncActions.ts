import { createAsyncThunk } from "@reduxjs/toolkit"
import { UserLoginDataType, UserReturnLoginType } from "../../api/types"
import { UserState } from "./types"
import { userApi } from "../../api/userApi"

export const login = createAsyncThunk<UserState, UserLoginDataType>(
  "user/login",
  //@ts-ignore
  async (userData) => {
    const response = await userApi.login(userData)
    return response
  }
)