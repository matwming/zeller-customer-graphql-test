import { render, screen } from "@testing-library/react";
import { Loading } from "./loading";

describe("loading test => ", () => {
  it("Given loading is true, then expect the app is loading", () => {
    const value = "loading";
    const testid = "loading";
    const children = () => "a fake children";
    const loading = true;
    render(
      <Loading
        value={value}
        testid={testid}
        loading={loading}
        children={children}
      />
    );
    expect(screen.getByTestId("loading")).toBeInTheDocument();
    expect(screen.queryByText("a fake children")).not.toBeInTheDocument();
  });

  it("Given loading is false, then expect the app renders", () => {
    const value = "loading";
    const testid = "loading";
    const children = "a fake children";
    const loading = false;
    render(
      <Loading
        value={value}
        testid={testid}
        loading={loading}
        children={children}
      />
    );
    expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    expect(screen.queryByText("a fake children")).toBeInTheDocument();
  });
});
