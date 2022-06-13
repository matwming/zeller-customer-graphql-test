import { render } from "@testing-library/react";
import ErrorScreen from "./errorScreen";

describe("error screen test => ", () => {
  it('Given the error screen renders, the focus should be on "Something is wrong. Please try again later." paragraph', () => {
    render(<ErrorScreen />);
    expect(document.activeElement?.textContent).toBe(
      "Something is wrong. Please try again later."
    );
  });
});
