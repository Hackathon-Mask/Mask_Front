import { customAxios } from "../../lib/axios";
import { StudentsResponse } from "../../types/user/user.type";
import { getStudentsParams, postCoffeeChat } from "./coffeeChat.param";

class CoffeeChatRepository {
  public async getStudents({
    school,
  }: getStudentsParams): Promise<StudentsResponse> {
    const { data } = await customAxios.get(`/users?school=${school}`);
    return data;
  }

  public async postCoffeeChat({ to_user_id, message }: postCoffeeChat) {
    await customAxios.post("/coffee-chat", { to_user_id, message });
  }
}

export default new CoffeeChatRepository();
