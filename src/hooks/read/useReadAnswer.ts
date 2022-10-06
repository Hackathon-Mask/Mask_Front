import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { usePostAnswer } from "../../quries/post/post.query";
import { readAnswerAtom } from "../../store/read/read.store";

interface Params {
  questionId: number;
}

const useReadAnswer = ({ questionId }: Params) => {
  const queryClient = useQueryClient();

  const [content, setContent] = useState("");
  const [answer, setAnswer] = useRecoilState(readAnswerAtom);

  const postAnswerMutation = usePostAnswer();

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const onSubmitContent = async () => {
    postAnswerMutation.mutateAsync(
      {
        content,
        questionId,
      },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries(["post/getPost", questionId]);
          setContent("");
          setAnswer((prev) => [...prev, data]);
        },
      }
    );
  };

  return { content, onChangeContent, onSubmitContent };
};

export default useReadAnswer;
