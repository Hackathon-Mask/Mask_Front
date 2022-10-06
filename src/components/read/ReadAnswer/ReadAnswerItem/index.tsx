import TimeCounting from "time-counting";
import { PostAnswer } from "../../../../types/post/post.type";
import {
  ReadAnswerItemContainer,
  ReadAnswerItemHeaderContent,
  ReadAnswerItemHeaderProfileImg,
  ReadAnswerItemHeaderTimeCount,
  ReadAnswerItemHeaderWrap,
  ReadAnswerItemHeaderWriterName,
  ReadAnswerItemHeaderWriterNameWrap,
  ReadAnswerItemHeaderWriterWrap,
  ReadAnswerItemMajorTag,
  ReadAnswerItemSkillTag,
  ReadAnswerItemTagWrap,
} from "./style";

interface Props {
  data: PostAnswer;
}

const ReadAnswerItem = ({ data }: Props) => {
  return (
    <ReadAnswerItemContainer>
      <ReadAnswerItemHeaderWrap>
        <ReadAnswerItemHeaderProfileImg
          src={"https://avatars.githubusercontent.com/u/79711744?v=4"}
        />
        <ReadAnswerItemHeaderWriterWrap>
          <ReadAnswerItemHeaderWriterNameWrap>
            <ReadAnswerItemHeaderWriterName>
              {data.writer.name}
            </ReadAnswerItemHeaderWriterName>
            <ReadAnswerItemHeaderTimeCount>
              {TimeCounting(data.created_at, { lang: "ko" })}
            </ReadAnswerItemHeaderTimeCount>
          </ReadAnswerItemHeaderWriterNameWrap>
          <ReadAnswerItemHeaderContent>
            {data.content}
          </ReadAnswerItemHeaderContent>
        </ReadAnswerItemHeaderWriterWrap>
      </ReadAnswerItemHeaderWrap>
      <ReadAnswerItemTagWrap>
        <ReadAnswerItemMajorTag>
          {data.writer.major_tag.name}
        </ReadAnswerItemMajorTag>
        {data.writer.skills.map((skill) => (
          <ReadAnswerItemSkillTag key={skill.id}>
            {skill.name}
          </ReadAnswerItemSkillTag>
        ))}
      </ReadAnswerItemTagWrap>
    </ReadAnswerItemContainer>
  );
};

export default ReadAnswerItem;
