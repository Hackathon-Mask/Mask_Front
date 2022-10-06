import { atom } from "recoil";
import { PostAnswer } from "../../types/post/post.type";

export const readAnswerAtom = atom<PostAnswer[]>({
  key: "read/readAnswerAtom",
  default: [],
});
