import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./Button";

describe("<Button />", () => {
  it("correctly pass disabled attribute", async () => {
    const onClickFn = vi.fn();
    const { getByRole } = render(
      <Button disabled onClick={onClickFn}>
        Test
      </Button>
    );

    const btnEl = getByRole("button");

    await userEvent.click(getByRole("button"));

    expect(btnEl).toBeDisabled();
    expect(onClickFn).not.toHaveBeenCalled();
  });

  it("calls onClick when clicked", async () => {
    const onClickFn = vi.fn();

    const { getByRole } = render(<Button onClick={onClickFn}>btn</Button>);

    await userEvent.click(getByRole("button"));

    expect(onClickFn).toHaveBeenCalled();
  });
});
