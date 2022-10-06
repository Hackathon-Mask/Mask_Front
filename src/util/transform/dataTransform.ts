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

export const schoolTransform = (school: string) => {
  switch (school) {
    case "광주":
      return "GSM";
    case "대구":
      return "DGSW";
    case "대덕":
      return "DSM";
    case "부산":
      return "BSSM";
    default:
      return "GSM";
  }
};
