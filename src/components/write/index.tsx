import {
  WriteContainer,
  WriteEditorWrap,
  WriteFileImage,
  WriteFileLabel,
  WriteFileLabelIcon,
  WriteFileLabelText,
  WriteFileLabelWrap,
  WriteInput,
  WriteInputSubTitle,
  WriteInputTitle,
  WriteSubmitButton,
  WriteTag,
  WriteTagWrap,
  WriteTextArea,
  WriteTitle,
  WriteWrap,
} from "./style";

import WriteFileInputIcon from "../../assets/icon/write/writeFileInputIcon.svg";
import useWrite from "../../hooks/write/useWrite";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { usePostImage } from "../../quries/image/image.query";

const Write = () => {
  const {
    handleData,
    majors,
    skills,
    editorRef,
    onHandleData,
    onUploadImage,
    onHandleMajor,
    onChangeContent,
    onHandleSkill,
    onSubmitData,
  } = useWrite();

  const postImageMutation = usePostImage();

  return (
    <WriteContainer>
      <WriteTitle>에스크 작성</WriteTitle>
      <WriteInputTitle>제목</WriteInputTitle>
      <WriteInput
        value={handleData.title}
        onChange={onHandleData}
        name="title"
        placeholder="질문의 제목을 입력하세요."
      />
      <div style={{ display: "flex" }}>
        <WriteInputTitle>분야 선택</WriteInputTitle>
        <WriteInputSubTitle>(필수)</WriteInputSubTitle>
      </div>
      <WriteTagWrap>
        {majors.map((major) => (
          <WriteTag
            onClick={() => onHandleMajor(major)}
            isSelect={major.id === handleData.major_tag}
            key={major.id}
          >
            {major.name}
          </WriteTag>
        ))}
      </WriteTagWrap>
      <div style={{ display: "flex" }}>
        <WriteInputTitle>기술 스택</WriteInputTitle>
        <WriteInputSubTitle>(필수)</WriteInputSubTitle>
      </div>
      <WriteTagWrap>
        {skills.map((skill) => (
          <WriteTag
            isSelect={
              handleData.skills.find((item) => item === skill.id) ? true : false
            }
            key={skill.id}
            onClick={() => onHandleSkill(skill)}
          >
            {skill.name}
          </WriteTag>
        ))}
      </WriteTagWrap>
      <div style={{ display: "flex" }}>
        <WriteInputTitle>본문</WriteInputTitle>
      </div>
      <WriteEditorWrap>
        <Editor
          ref={editorRef}
          height="691px"
          previewStyle="vertical"
          onChange={onChangeContent}
          hooks={{
            addImageBlobHook: async (blob, callback) => {
              console.log(blob);

              const formData = new FormData();
              formData.append("image", blob);
              postImageMutation.mutateAsync(
                { image: formData },
                {
                  onSuccess: (data) => {
                    callback(data.path, "alt text");
                  },
                }
              );
            },
          }}
        />
      </WriteEditorWrap>
      <WriteWrap>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <WriteInputTitle>대표 이미지</WriteInputTitle>
          {handleData.title_image === "" ? (
            <>
              <input type="file" id="writeFileInput" onChange={onUploadImage} />
              <WriteFileLabel htmlFor="writeFileInput">
                <WriteFileLabelWrap>
                  <WriteFileLabelIcon src={WriteFileInputIcon} />
                  <WriteFileLabelText>
                    대표 이미지를 설정 해주세요.
                  </WriteFileLabelText>
                </WriteFileLabelWrap>
              </WriteFileLabel>
            </>
          ) : (
            <WriteFileImage src={handleData.title_image} />
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <WriteInputTitle>질문 설명</WriteInputTitle>
          <WriteTextArea
            onChange={onHandleData}
            placeholder="질문에 대한 설명을 적어주세요."
            value={handleData.summary}
            name="summary"
          />
        </div>
      </WriteWrap>
      <WriteSubmitButton onClick={onSubmitData}>
        게시물 게시하기
      </WriteSubmitButton>
    </WriteContainer>
  );
};

export default Write;
