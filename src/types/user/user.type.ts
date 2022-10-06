import { PostMajor, PostSkill } from "../post/post.type";

export interface User {
  id: number;
  name: string;
  school: string;
  generation: number;
  belong: string;
  major_tag: PostMajor;
  skills: PostSkill[];
  email: string;
}

export interface MyUserResponse extends User {}

export interface UserResponse extends User {}

export interface StudentsResponse {
  users: User[];
}
