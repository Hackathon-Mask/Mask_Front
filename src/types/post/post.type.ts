export interface Post {
  title: string;
  titleImage: string;
  summary: string;
  majorTag: PostMajor;
  skills: PostSkill[];
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
}

export interface ApplyPost extends Post {
  content: string;
}

export interface SkillsResponse {
  tags: PostSkill[];
}

export interface MajorsResponse {
  tags: PostMajor[];
}
