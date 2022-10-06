export const postSortModeTransform = (mode: string): string => {
  switch (mode) {
    case "시간순":
      return "DATE";

    case "인기순":
      return "POPULAR";

    default:
      return "DATE";
  }
};
