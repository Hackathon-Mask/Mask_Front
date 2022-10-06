import { AxiosError } from "axios";
import { useMutation, useQuery, UseQueryResult } from "react-query";
import { postWriteParams } from "../../repository/post/post.param";
import postRepository from "../../repository/post/post.repository";
import { MajorsResponse, SkillsResponse } from "../../types/post/post.type";

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

export const usePostWrite = () => {
  const mutation = useMutation(({ data }: postWriteParams) =>
    postRepository.postWrite({ data })
  );

  return mutation;
};
