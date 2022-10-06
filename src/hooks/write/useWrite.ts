import { Editor } from "@toast-ui/react-editor";
import React, { useEffect, useRef, useState } from "react";
import { usePostImage } from "../../quries/image/image.query";
import {
  useGetMajors,
  useGetSkills,
  usePostWrite,
} from "../../quries/post/post.query";
import { ApplyPost, PostMajor, PostSkill } from "../../types/post/post.type";

const useWrite = () => {
  const editorRef = useRef<Editor>(null);

  const [handleData, setHandleData] = useState<ApplyPost>({
    title: "",
    titleImage: "",
    summary: "",
    majorTag: {
      id: 0,
      name: "",
    },
    content: "",
    skills: [],
  });

  const [majors, setMajors] = useState<PostMajor[]>([]);
  const [skills, setSkills] = useState<PostSkill[]>([]);

  const { data: skillData, isLoading: skillDataIsLoading } = useGetSkills();
  const { data: majorData, isLoading: majorDataIsLoading } = useGetMajors();

  const postImageMutation = usePostImage();
  const postWriteMutation = usePostWrite();

  useEffect(() => {
    if (!skillDataIsLoading && !majorDataIsLoading && majorData && skillData) {
      setMajors(majorData.tags);
      setSkills(skillData.tags);
    }
  }, [skillData, majorData, skillDataIsLoading, majorDataIsLoading]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current?.getInstance().setMarkdown("");
    }
  }, []);

  const onHandleData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    setHandleData((prev) => ({ ...prev, [name]: value }));
  };

  const onUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files.length) {
      const formData = new FormData();
      formData.append("image", files[0]);
      postImageMutation.mutateAsync(
        { image: formData },
        {
          onSuccess: (data) => {
            setHandleData((prev) => ({ ...prev, title_image: data.path }));
          },
        }
      );
    }
  };

  const onHandleMajor = (item: PostMajor) => {
    setHandleData((prev) => ({ ...prev, majorTag: item }));
  };

  const onChangeContent = () => {
    if (editorRef.current) {
      setHandleData((prev) => ({
        ...prev,
        content: editorRef.current!.getInstance().getMarkdown(),
      }));
    }
  };

  const onHandleSkill = (item: PostSkill) => {
    setHandleData((prev) => {
      const isOverLap = prev.skills.find((skill) => skill.id === item.id);

      if (isOverLap) {
        return {
          ...prev,
          skills: prev.skills.filter((skill) => skill.id !== item.id),
        };
      } else {
        return { ...prev, skills: [...prev.skills, item] };
      }
    });
  };

  const onSubmitData = async () => {
    postWriteMutation.mutateAsync({ data: handleData });
  };

  useEffect(() => {
    console.log(handleData);
  }, [handleData]);

  return {
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
  };
};

export default useWrite;
