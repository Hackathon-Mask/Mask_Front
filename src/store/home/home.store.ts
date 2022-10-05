import { atom } from "recoil";
import { POST_FIELDS } from "../../constants/post/post.constant";

export const homeCategoryAtom = atom<string>({
  key: "home/homeCategoryAtom",
  default: POST_FIELDS[0],
});
