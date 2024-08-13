import { describe, expect, it } from "vitest";
import { capitalize } from "@utils";

describe("utils", () => {
  describe("capitalize", () => {
    it("returns empty string argument is empty", () => {
      const res = capitalize("");
      expect(res).toEqual("");
    });

    it.each([
      { input: "test", output: "Test" },
      { input: "Test", output: "Test" },
      { input: "TEST", output: "TEST" },
      { input: "tEST", output: "TEST" },
    ])("should return correct capitalized value", ({ input, output }) => {
      expect(output).toEqual(capitalize(input));
    });
  });
});
