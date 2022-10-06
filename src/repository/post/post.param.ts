import { ApplyPost } from "../../types/post/post.type";

export interface postWriteParams {
  data: ApplyPost;
}

export interface getPostsParams {
  majorTagId: number;
  queryType: string;
}

export interface getPostParams {
  questionId: string;
}

export interface postCuriousityPostParams {
  questionId: number;
}

export interface postAnswerParams {
  content: string;
  questionId: number;
}

export interface deleteCuriousityPostParams {
  questionId: number;
}
