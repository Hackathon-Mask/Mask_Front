import {
  ReadLikeButton,
  ReadLikeButtonIcon,
  ReadLikeContainer,
  ReadLikeCount,
  ReadLikeLinkButton,
} from "./style";
import { FaQuestion } from "@react-icons/all-files/fa/FaQuestion";
import useReadLike from "../../../hooks/read/useReadLike";

interface Props {
  curiousity_count: number;
  questionId: number;
  curiousity: boolean;
}

const ReadLike = ({ curiousity_count, questionId, curiousity }: Props) => {
  const { isClick, count, onChangeClick } = useReadLike({
    prevIsClick: curiousity,
    prevCount: curiousity_count,
  });

  return (
    <ReadLikeContainer>
      <ReadLikeButton
        isClick={isClick}
        onClick={() => onChangeClick(questionId)}
      >
        <ReadLikeButtonIcon>
          <FaQuestion />
        </ReadLikeButtonIcon>
      </ReadLikeButton>
      <ReadLikeCount>{count}</ReadLikeCount>
      <ReadLikeLinkButton></ReadLikeLinkButton>
    </ReadLikeContainer>
  );
};

export default ReadLike;
