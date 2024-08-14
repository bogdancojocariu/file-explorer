import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DownloadFilesButton } from "./DownloadFilesButton";
import userEvent from "@testing-library/user-event";

describe("<DownloadFilesButton />", () => {
  it("shows an alert with all paths and devices to files", async () => {
    vi.stubGlobal("alert", vi.fn());

    const devicesInfo = ["\\test-A.exe", "\\another-B.txt", "\\last-B.txt"];

    const { getByRole } = render(
      <DownloadFilesButton devicesInfo={devicesInfo} />
    );

    await userEvent.click(getByRole("button"));

    const expected = `\\test-A.exe,
\\another-B.txt,
\\last-B.txt`;

    expect(window.alert).toHaveBeenCalledWith(expected);
  });
});
