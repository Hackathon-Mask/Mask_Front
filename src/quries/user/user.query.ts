import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { getUserParams } from "../../repository/user/user.param";
import userRepository from "../../repository/user/user.repository";
import { MyUserResponse, UserResponse } from "../../types/user/user.type";

export const useGetMyUser = (): UseQueryResult<MyUserResponse, AxiosError> =>
  useQuery("user/getMyUser", () => userRepository.getMyUser(), {});

export const useGetUser = ({
  userId,
}: getUserParams): UseQueryResult<UserResponse, AxiosError> =>
  useQuery("user/getUser", () => userRepository.getUser({ userId }), {});
