import { useMutation } from "react-query";
import { postImageParams } from "../../repository/image/image.param";
import imageRepository from "../../repository/image/image.repository";

export const usePostImage = () => {
  const mutation = useMutation(({ image }: postImageParams) =>
    imageRepository.postImage({ image })
  );

  return mutation;
};
