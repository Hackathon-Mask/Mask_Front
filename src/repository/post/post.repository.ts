import { customAxios } from "../../lib/axios";
import {
  MajorsResponse,
  PostsResponse,
  SkillsResponse,
} from "../../types/post/post.type";
import { getPostsParams, postWriteParams } from "./post.param";

class PostRepository {
  public async getSkills(): Promise<SkillsResponse> {
    const { data } = await customAxios.get("/tags/skills");
    return data;
  }

  public async getMajors(): Promise<MajorsResponse> {
    const { data } = await customAxios.get("/tags/majors");
    return data;
  }

  public async getPosts({
    majorTagId,
    queryType,
  }: getPostsParams): Promise<PostsResponse> {
    const { data } = await customAxios.get(
      `/questions?majorTagId=${majorTagId}&queryType=${queryType}&keyword=${"Adsasd"}`
    );

    return data;
  }

  public async postWrite({ data }: postWriteParams): Promise<void> {
    await customAxios.post("/questions", data);
  }
}

export default new PostRepository();
