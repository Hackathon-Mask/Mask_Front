import { atom } from "recoil";
import { PostMajor } from "../../types/post/post.type";

export const homeCategoryAtom = atom<PostMajor>({
  key: "home/homeCategoryAtom",
  default: {
    id: 1,
    name: "Backend",
  },
});
