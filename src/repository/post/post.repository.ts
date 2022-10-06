import { customAxios } from "../../lib/axios";
import {
  MajorsResponse,
  MyPostsResponse,
  PostAnswer,
  PostResponse,
  PostsResponse,
  SkillsResponse,
} from "../../types/post/post.type";
import {
  deleteCuriousityPostParams,
  getPostParams,
  getPostsParams,
  postAnswerParams,
  postCuriousityPostParams,
  postWriteParams,
} from "./post.param";

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
      `/questions?majorTagId=${majorTagId}&queryType=${queryType}`
    );

    return data;
  }

  public async getPost({ questionId }: getPostParams): Promise<PostResponse> {
    const { data } = await customAxios.get(`/questions/${questionId}`);
    return data;
  }

  public async getMyPosts(): Promise<MyPostsResponse> {
    const { data } = await customAxios.get("/questions/me");
    return data;
  }

  public async postWrite({ data }: postWriteParams): Promise<void> {
    await customAxios.post("/questions", data);
  }

  public async postCuriousityPost({
    questionId,
  }: postCuriousityPostParams): Promise<void> {
    await customAxios.post(`/curiousity/${questionId}`);
  }

  public async postAnswer({
    content,
    questionId,
  }: postAnswerParams): Promise<PostAnswer> {
    const { data } = await customAxios.post(`/answers/${questionId}`, {
      content,
    });

    return data;
  }

  public async deleteCuriousityPost({
    questionId,
  }: deleteCuriousityPostParams): Promise<void> {
    await customAxios.delete(`/curiousity/${questionId}`);
  }
}

export default new PostRepository();
