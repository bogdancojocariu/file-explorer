import { File } from "./types";

export const getRowId = (file: File) => `${file.path}-${file.device}`;

export const allFilesSelected = (
  files: File[],
  selectedFilesId: string[]
): boolean =>
  selectedFilesId.sort().toString() === files.map(getRowId).sort().toString();
