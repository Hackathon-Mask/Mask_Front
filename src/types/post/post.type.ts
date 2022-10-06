export interface Post {
  title: string;
  title_image: string;
  summary: string;
}

export interface PostMajor {
  id: number;
  name: string;
}

export interface PostSkill {
  id: number;
  name: string;
}

export interface PostWriter {
  id: number;
  name: string;
}

export interface PostAnswer {
  id: number;
  content: string;
  created_at: string;
  writer: PostWriter & {
    major_tag: PostMajor;
    skills: PostSkill[];
  };
}

export interface VisiblePost extends Post {
  readonly id: number;
  readonly created_at: string;
  answer_count: number;
  curiousity_count: number;
  skills: PostSkill[];
  major_tag: PostMajor;
}

export interface ApplyPost extends Post {
  content: string;
  skills: number[];
  major_tag: number;
}

export interface VisibleSinglePost extends VisiblePost {
  writer: PostWriter;
  answers: PostAnswer[];
  content: string;
  is_curiousity: boolean;
}

export interface SkillsResponse {
  tags: PostSkill[];
}

export interface MajorsResponse {
  tags: PostMajor[];
}

export interface PostsResponse {
  questions: VisiblePost[];
}

export interface PostResponse extends VisibleSinglePost {}

export interface MyPostsResponse {
  questions: VisiblePost[];
}
