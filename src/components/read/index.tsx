import { useParams } from "react-router-dom";
import { useGetPost } from "../../quries/post/post.query";
import {
  ReadContainer,
  ReadContentWrap,
  ReadHeaderMajorTag,
  ReadHeaderProfileImg,
  ReadHeaderProfileInfoCreatedAt,
  ReadHeaderProfileInfoName,
  ReadHeaderProfileInfoWrap,
  ReadHeaderProfileWrap,
  ReadHeaderSkillTag,
  ReadHeaderStatusGif,
  ReadHeaderStatusText,
  ReadHeaderStatusWrap,
  ReadHeaderTagWrap,
  ReadHeaderTitle,
  ReadHeaderWrap,
  ReadTitleImg,
  ReadViewWrap,
  ReadWrap,
} from "./style";
import { Viewer } from "@toast-ui/react-editor";
import ReadPostStatusGif from "../../assets/gif/read/readPostStatusGif.gif";
import ReadLike from "./ReadLike";
import ReadAnswer from "./ReadAnswer";
import { readAnswerAtom } from "../../store/read/read.store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const Read = () => {
  const { questionid } = useParams();

  const { data, isLoading } = useGetPost({ questionId: questionid! });
  const [answer, setAnswer] = useRecoilState(readAnswerAtom);

  useEffect(() => {
    if (data) {
      setAnswer(data.answers);
    }
  }, [data, setAnswer]);

  return (
    <>
      <ReadContainer>
        <ReadWrap>
          {!isLoading && (
            <ReadLike
              questionId={data?.id!}
              curiousity_count={data?.curiousity_count!}
              curiousity={data?.is_curiousity!}
            />
          )}
          <ReadContentWrap>
            <ReadHeaderWrap>
              <ReadHeaderStatusWrap>
                <ReadHeaderStatusGif src={ReadPostStatusGif} />
                <ReadHeaderStatusText>토론중</ReadHeaderStatusText>
              </ReadHeaderStatusWrap>
              <ReadHeaderTitle>{data?.title}</ReadHeaderTitle>
              <ReadHeaderTagWrap>
                <ReadHeaderMajorTag>{data?.major_tag.name}</ReadHeaderMajorTag>
                {data?.skills.map((skill) => (
                  <ReadHeaderSkillTag key={skill.id}>
                    {skill.name}
                  </ReadHeaderSkillTag>
                ))}
              </ReadHeaderTagWrap>
              <ReadHeaderProfileWrap>
                <ReadHeaderProfileImg
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU"
                  }
                />
                <ReadHeaderProfileInfoWrap>
                  <ReadHeaderProfileInfoName>
                    {data?.writer.name}
                  </ReadHeaderProfileInfoName>
                  <ReadHeaderProfileInfoCreatedAt>
                    {data?.created_at}
                  </ReadHeaderProfileInfoCreatedAt>
                </ReadHeaderProfileInfoWrap>
              </ReadHeaderProfileWrap>
            </ReadHeaderWrap>
            <ReadTitleImg src={data?.title_image} />
            <ReadViewWrap>
              {!isLoading && <Viewer initialValue={data?.content} />}
            </ReadViewWrap>
          </ReadContentWrap>
        </ReadWrap>
      </ReadContainer>
      {!isLoading && <ReadAnswer questionId={Number(questionid)!} />}
    </>
  );
};

export default Read;
