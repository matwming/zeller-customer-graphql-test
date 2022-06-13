import withErrorBoundary from "./errorBoundary";
import { render, screen } from "@testing-library/react";

describe("ErrorBoundary test => ", () => {
  const FallbackUIComponent = jest.fn();
  const FakeAppComponent = jest.fn();

  it("Given there is no error in the app, then expect the app renders its contents successfully", () => {
    //Arrange
    const fakeAppComponentContent = "this is a fake component";
    FakeAppComponent.mockReturnValue(fakeAppComponentContent);
    const TestWithErrorComponentFn = withErrorBoundary(FakeAppComponent, {
      FallbackUIComponent: FallbackUIComponent,
    });

    //Act
    render(<TestWithErrorComponentFn />);

    //Assert
    expect(screen.getByText(fakeAppComponentContent)).toBeInTheDocument();
  });

  it("Given there is an error when rendering the app, then expect the FallbackUI shows on the screen", () => {
    //Arrange
    const fakeErrorScreenContent = "this is a fake fallback UI error screen";
    FallbackUIComponent.mockReturnValue(fakeErrorScreenContent);
    FakeAppComponent.mockImplementation(() => {
      throw "a fake error occurred in the app component";
    });
    const TestWithErrorComponentFn = withErrorBoundary(FakeAppComponent, {
      FallbackUIComponent: FallbackUIComponent,
    });

    //Act
    render(<TestWithErrorComponentFn />);

    //Assert
    expect(screen.getByText(fakeErrorScreenContent)).toBeInTheDocument();
  });
});
