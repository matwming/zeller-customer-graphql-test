import User from "./user";
import { RoleType } from "../types/types";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import valueDisplayService from "../services/valueDisplayService";

describe("user component =>", () => {
  const user = {
    email: "lynn@gmail.com",
    id: "f47813cf-0482-4326-afc9-12f53218ed06",
    name: "Lynn Warr",
    role: "MANAGER" as RoleType,
  };
  it("Given user information, expect user name in capital, user name, and user role shows on the screen ", () => {
    render(<User user={user} valueDisplayService={valueDisplayService} />);
    expect(screen.getByTestId("nameFirstLetterInCapital")).toHaveTextContent(
      "L"
    );
    expect(screen.getByTestId("userName")).toHaveTextContent("Lynn Warr");
    expect(screen.getByTestId("userRole")).toHaveTextContent("Manager");
  });
});
