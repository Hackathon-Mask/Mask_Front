import { customAxios } from "../../lib/axios";
import { StudentsResponse } from "../../types/user/user.type";
import { getStudentsParams } from "./coffeeChat.param";

class CoffeeChatRepository {
  public async getStudents({
    school,
  }: getStudentsParams): Promise<StudentsResponse> {
    const { data } = await customAxios.get(`/users?school=${school}`);
    return data;
  }
}

export default new CoffeeChatRepository();
