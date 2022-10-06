import { useRecoilValue } from "recoil";
import { readAnswerAtom } from "../../../store/read/read.store";
import ReadAnswerForm from "./ReadAnswerForm";
import ReadAnswerItem from "./ReadAnswerItem";
import {
  ReadAnswerContainer,
  ReadAnswerCount,
  ReadAnswerListWrap,
  ReadAnswerWrap,
} from "./style";

interface Props {
  questionId: number;
}

const ReadAnswer = ({ questionId }: Props) => {
  const answer = useRecoilValue(readAnswerAtom);

  return (
    <ReadAnswerContainer>
      <ReadAnswerWrap>
        <ReadAnswerWrap>
          <ReadAnswerCount>
            댓글 <strong>{answer.length}</strong>
          </ReadAnswerCount>
        </ReadAnswerWrap>
        <ReadAnswerListWrap>
          {answer.map((answer) => (
            <ReadAnswerItem data={answer} key={answer.id} />
          ))}
          <ReadAnswerForm questionId={questionId} />
        </ReadAnswerListWrap>
      </ReadAnswerWrap>
    </ReadAnswerContainer>
  );
};

export default ReadAnswer;
