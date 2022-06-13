import Title from "./title";
import { render, screen } from "@testing-library/react";

describe("title component =>", () => {
  it('Given value is "User Types", expect "User Types" shows on the screen', () => {
    const value = "User Types";
    const testid = "userTypes";
    render(<Title value={value} testid={testid} />);
    expect(screen.getByTestId(testid)).toHaveTextContent(value);
  });
});
