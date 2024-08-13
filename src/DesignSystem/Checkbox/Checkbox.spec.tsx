import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "./Checkbox";
import userEvent from "@testing-library/user-event";

describe("<Checkbox />", () => {
  it("toggles checked on onChange", async () => {
    const onChangeFn = vi.fn();

    const { getByRole } = render(<Checkbox onChange={onChangeFn} />);

    const checkbox = getByRole("checkbox");

    await userEvent.click(checkbox);

    expect(onChangeFn).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ checked: true }),
      })
    );

    await userEvent.click(checkbox);

    expect(onChangeFn).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ checked: false }),
      })
    );
  });

  it("correctly sets indeterminate state", async () => {
    const onChangeFn = vi.fn();

    const { getByRole } = render(
      <Checkbox indeterminate onChange={onChangeFn} />
    );

    const checkbox = getByRole("checkbox");
    expect(checkbox).toBePartiallyChecked();

    await userEvent.click(checkbox);

    expect(onChangeFn).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ checked: true }),
      })
    );
  });
});
