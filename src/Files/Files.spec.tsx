import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

import mockFiles from "../api/db.json";

import { Files } from "./Files";
import { File } from "./types";
import { getRowId, testIds } from "./utils";

const files = mockFiles as File[];

describe("<Files />", () => {
  it("select-all checkbox selects all available files", async () => {
    const { getByTestId, getByLabelText, getByRole } = render(
      <Files files={files} />
    );

    const selectAllCheckbox = getByTestId(testIds.selectAllCheckbox);

    expect(selectAllCheckbox).not.toBeChecked();
    getByLabelText("None Selected");

    await userEvent.click(selectAllCheckbox);

    expect(selectAllCheckbox).toBePartiallyChecked();
    getByLabelText("Selected 2");
    const downloadFilesBtn = getByRole("button");

    expect(downloadFilesBtn.textContent).toEqual("Download Selected");

    await userEvent.click(selectAllCheckbox);

    getByLabelText("None Selected");
  });

  it("selects the clicked row", async () => {
    const { getByRole, getByTestId, getByLabelText } = render(
      <Files files={files} />
    );

    const fileTable = getByRole("table");

    const availableFileSelectCheckbox1 = getByTestId(
      getRowId(files[1]) + "-select-checkbox"
    );

    await userEvent.click(availableFileSelectCheckbox1);

    getByLabelText("Selected 1");

    const availableFileSelectCheckbox2 = getByTestId(
      getRowId(files[2]) + "-select-checkbox"
    );

    await userEvent.click(availableFileSelectCheckbox2);

    getByLabelText("Selected 2");
  });
});
