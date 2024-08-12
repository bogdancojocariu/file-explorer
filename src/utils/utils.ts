export const capitalize = (str: string): string => {
  if (!str) return "";

  return str[0].toUpperCase() + str.substring(1);
};
