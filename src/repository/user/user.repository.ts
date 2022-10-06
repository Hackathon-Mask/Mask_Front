import { customAxios } from "../../lib/axios";
import { MyUserResponse, UserResponse } from "../../types/user/user.type";
import { getUserParams } from "./user.param";

class User {
  public async getMyUser(): Promise<MyUserResponse> {
    const { data } = await customAxios.get("/users/me");
    return data;
  }

  public async getUser({ userId }: getUserParams): Promise<UserResponse> {
    const { data } = await customAxios.get(`/users/${userId}`);
    return data;
  }
}

export default new User();
