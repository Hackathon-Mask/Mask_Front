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

export interface SkillsResponse {
  tags: PostSkill[];
}

export interface MajorsResponse {
  tags: PostMajor[];
}
