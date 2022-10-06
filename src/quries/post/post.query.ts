import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryResult } from "react-query";
import {
  deleteCuriousityPostParams,
  getPostParams,
  getPostsParams,
  postAnswerParams,
  postCuriousityPostParams,
  postWriteParams,
} from "../../repository/post/post.param";
import postRepository from "../../repository/post/post.repository";
import {
  MajorsResponse,
  PostResponse,
  PostsResponse,
  SkillsResponse,
} from "../../types/post/post.type";

export const useGetSkills = (): UseQueryResult<SkillsResponse, AxiosError> =>
  useQuery("post/getSkills", () => postRepository.getSkills(), {
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  });

export const useGetMajors = (): UseQueryResult<MajorsResponse, AxiosError> =>
  useQuery("post/getMajors", () => postRepository.getMajors(), {
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  });

export const useGetPosts = ({
  majorTagId,
  queryType,
}: getPostsParams): UseQueryResult<PostsResponse, AxiosError> =>
  useQuery(
    ["post/getPosts", majorTagId],
    () => postRepository.getPosts({ majorTagId, queryType }),
    {
      enabled: !!majorTagId && !!queryType,
    }
  );

export const useGetPost = ({
  questionId,
}: getPostParams): UseQueryResult<PostResponse, AxiosError> =>
  useQuery(
    ["post/getPost", questionId],
    () => postRepository.getPost({ questionId }),
    {
      cacheTime: 1000 * 60 * 60,
      staleTime: 1000 * 60 * 30,
      enabled: !!questionId,
    }
  );

export const usePostWrite = () => {
  const mutation = useMutation(({ data }: postWriteParams) =>
    postRepository.postWrite({ data })
  );

  return mutation;
};

export const usePostCuriousityPost = () => {
  const mutation = useMutation(({ questionId }: postCuriousityPostParams) =>
    postRepository.postCuriousityPost({ questionId })
  );

  return mutation;
};

export const usePostAnswer = () => {
  const mutation = useMutation(({ questionId, content }: postAnswerParams) =>
    postRepository.postAnswer({ questionId, content })
  );

  return mutation;
};

export const useDeleteCuriousityPost = () => {
  const mutation = useMutation(({ questionId }: deleteCuriousityPostParams) =>
    postRepository.deleteCuriousityPost({ questionId })
  );

  return mutation;
};
