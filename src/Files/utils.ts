import { File, FileStatusEnum } from "./types";

export const getRowId = (file: File) => `${file.path}-${file.device}`;

export const allFilesSelected = (
  files: File[],
  selectedFilesId: string[]
): boolean => {
  if (files.length === 0 || selectedFilesId.length === 0) return false;

  return (
    selectedFilesId.sort().toString() === files.map(getRowId).sort().toString()
  );
};

export const isFileSelectable = (file: File): boolean =>
  file.status === FileStatusEnum.Available;

export const testIds = {
  selectAllCheckbox: "select-all-checkbox",
};
