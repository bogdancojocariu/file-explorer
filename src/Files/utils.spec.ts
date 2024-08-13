import { describe, expect, it } from "vitest";
import { File, FileStatusEnum } from "./types";
import { allFilesSelected, getRowId } from "./utils";

const mockFiles: File[] = [
  {
    name: "test.exe",
    path: "\\Documents\test.exe",
    device: "PC",
    status: FileStatusEnum.Available,
  },
  {
    name: "readme.md",
    path: "\\Downloads\readme.md",
    device: "PC",
    status: FileStatusEnum.Scheduled,
  },
];

describe("Files.utils", () => {
  describe("getRowId()", () => {
    it("correctly maps a File", () => {
      const expected = "\\Documents\test.exe-PC";
      const res = getRowId(mockFiles[0]);

      expect(expected).toEqual(res);
    });
  });

  describe("allFilesSelected()", () => {
    it.each([
      { files: [], ids: [] },
      { files: [mockFiles[0]], ids: [] },
      { files: [], ids: [getRowId(mockFiles[0])] },
    ])(
      "should return false if at least one array is empty",
      ({ files, ids }) => {
        expect(allFilesSelected(files, ids)).toEqual(false);
      }
    );

    it("returns false if some devices are not selected", () => {
      const ids = ["\\Documents\test.exe-PC"];

      expect(allFilesSelected(mockFiles, ids)).toEqual(false);
    });

    it("returns true if all devices are selected", () => {
      const ids = ["\\Downloads\readme.md-PC", "\\Documents\test.exe-PC"];

      expect(allFilesSelected(mockFiles, ids)).toEqual(true);
    });
  });
});
