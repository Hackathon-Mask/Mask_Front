import useReadAnswer from "../../../../hooks/read/useReadAnswer";
import {
  ReadAnswerFormButton,
  ReadAnswerFormContainer,
  ReadAnswerFormTextarea,
} from "./style";

interface Props {
  questionId: number;
}

const ReadAnswerForm = ({ questionId }: Props) => {
  const { content, onChangeContent, onSubmitContent } = useReadAnswer({
    questionId,
  });

  return (
    <ReadAnswerFormContainer>
      <ReadAnswerFormTextarea
        value={content}
        onChange={onChangeContent}
        placeholder="댓글을 달아보세요!"
      />
      <ReadAnswerFormButton onClick={onSubmitContent}>
        확인
      </ReadAnswerFormButton>
    </ReadAnswerFormContainer>
  );
};
export default ReadAnswerForm;
