import { ApplyPost } from "../../types/post/post.type";

export interface postWriteParams {
  data: ApplyPost;
}

export interface getPostsParams {
  majorTagId: number;
  queryType: string;
}
