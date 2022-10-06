import { VisiblePost } from "../../../types/post/post.type";
import {
  PostCardContainer,
  PostCardContentCuriousityCountIcon,
  PostCardContentCuriousityCountIconWrap,
  PostCardContentCuriousityCountText,
  PostCardContentCuriousityCountWrap,
  PostCardContentFieldLabel,
  PostCardContentFieldLabelOverlay,
  PostCardContentFieldLabelWrap,
  PostCardContentSummary,
  PostCardContentTitle,
  PostCardContentWrap,
  PostCardImg,
} from "./style";

import { FaQuestion } from "@react-icons/all-files/fa/FaQuestion";

interface Props {
  data: VisiblePost;
}

const PostCard = ({ data }: Props) => {
  return (
    <PostCardContainer>
      <PostCardImg src={data.titleImage} />
      <PostCardContentWrap>
        <PostCardContentTitle>{data.title}</PostCardContentTitle>
        <PostCardContentSummary>{data.summary}</PostCardContentSummary>

        <PostCardContentFieldLabelWrap>
          <PostCardContentFieldLabel>
            {data.majorTag.name}
          </PostCardContentFieldLabel>
          <PostCardContentFieldLabelOverlay />
        </PostCardContentFieldLabelWrap>
        <PostCardContentCuriousityCountWrap>
          <PostCardContentCuriousityCountIconWrap>
            <PostCardContentCuriousityCountIcon>
              <FaQuestion />
            </PostCardContentCuriousityCountIcon>
          </PostCardContentCuriousityCountIconWrap>
          <PostCardContentCuriousityCountText>
            {data.curiousity_count}명이 궁금해요!
          </PostCardContentCuriousityCountText>
        </PostCardContentCuriousityCountWrap>
      </PostCardContentWrap>
    </PostCardContainer>
  );
};

export default PostCard;
