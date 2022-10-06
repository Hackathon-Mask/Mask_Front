import {  VisiblePost } from "../../../types/post/post.type";
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
import React from "react";
import { useNavigate } from "react-router-dom";


interface Props {
  data: VisiblePost;
}

const PostCard = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <PostCardContainer onClick={() => navigate(`/read/${data.id}`)}>
      <PostCardImg src={data.title_image} />
      <PostCardContentWrap>
        <PostCardContentTitle>{data.title}</PostCardContentTitle>
        <PostCardContentSummary>{data.summary}</PostCardContentSummary>

        <PostCardContentFieldLabelWrap>
          <PostCardContentFieldLabel>
            {data.major_tag.name}
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

export default React.memo(PostCard);
