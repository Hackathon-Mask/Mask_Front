import { useState } from "react";
import {
  useDeleteCuriousityPost,
  usePostCuriousityPost,
} from "../../quries/post/post.query";

interface Params {
  prevIsClick: boolean;
  prevCount: number;
}

const useReadLike = ({ prevIsClick, prevCount }: Params) => {
  const [isClick, setIsClick] = useState(prevIsClick);
  const [count, setCount] = useState(prevCount);

  const postCuriousityPostMutation = usePostCuriousityPost();
  const deleteCuriousityPostMutation = useDeleteCuriousityPost();

  const onChangeClick = async (questionId: number) => {
    if (isClick) {
      deleteCuriousityPostMutation.mutateAsync(
        { questionId },
        {
          onSuccess: (data) => {
            setIsClick(false);
            setCount((prev) => prev - 1);
          },
        }
      );
    } else {
      postCuriousityPostMutation.mutateAsync(
        { questionId },
        {
          onSuccess: () => {
            setIsClick(true);
            setCount((prev) => prev + 1);
          },
        }
      );
    }
  };

  return {
    isClick,
    count,
    onChangeClick,
  };
};

export default useReadLike;
