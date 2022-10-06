import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { getStudentsParams } from "../../repository/coffeeChat/coffeeChat.param";
import coffeeChatRepository from "../../repository/coffeeChat/coffeeChat.repository";
import { StudentsResponse } from "../../types/user/user.type";

export const useGetCoffeeChat = ({
  school,
}: getStudentsParams): UseQueryResult<StudentsResponse, AxiosError> =>
  useQuery("coffeeChat", () => coffeeChatRepository.getStudents({ school }));
