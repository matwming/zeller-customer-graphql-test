import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App, { ListZellerCustomersQuery } from "./App";
import { MockedProvider } from "@apollo/client/testing";

const mockedSuccessResponse = [
  {
    request: {
      query: ListZellerCustomersQuery,
    },
    result: {
      data: {
        listZellerCustomers: {
          items: [
            {
              email: "lynn@gmail.com",
              id: "f47813cf-0482-4326-afc9-12f53218ed06",
              name: "Lynn Warr",
              role: "MANAGER",
            },
            {
              email: "david@gmail.com",
              id: "73bae2af-4fa4-4023-8829-1034604e7590",
              name: "David Miller",
              role: "ADMIN",
            },
          ],
        },
      },
    },
  },
];

const mockedNetWorkErrorResponse = [
  {
    request: {
      query: ListZellerCustomersQuery,
    },
    error: new Error("a network error"),
  },
];

describe("App test => ", () => {
  describe("Given successful response => ", () => {
    beforeEach(() => {
      render(
        <MockedProvider mocks={mockedSuccessResponse} addTypename={false}>
          <App />
        </MockedProvider>
      );
    });

    it("Given App is loading, then expect loading is on the screen", () => {
      expect(screen.getByTestId("loading")).toBeInTheDocument();
    });
    it("Given App successfully loads the data, then expect the app shows the correct data on the screen", async () => {
      await waitFor(() => {
        expect(screen.getByTestId("userTypes")).toHaveTextContent("User Types");
        expect(screen.getByTestId("ADMIN")).toBeInTheDocument();
        expect(screen.getByTestId("MANAGER")).toBeInTheDocument();
      });
    });

    it("Given App successfully loads the data, users select Admin type, then expect Admin Users related info shows on the screen", async () => {
      await waitFor(() => {
        expect(screen.getByTestId("userTypes")).toHaveTextContent("User Types");
      });
      fireEvent.click(screen.getByTestId("ADMIN"));

      await waitFor(() => {
        expect(screen.getByTestId("userTypeTitle")).toHaveTextContent(
          "Admin Users"
        );
        expect(
          screen.getByTestId("nameFirstLetterInCapital")
        ).toHaveTextContent("D");
        expect(screen.getByTestId("userName")).toHaveTextContent(
          "David Miller"
        );
        expect(screen.getByTestId("userRole")).toHaveTextContent("Admin");
      });
    });

    it("Given App successfully loads the data, users select Manager type by clicking the row, then expect Manager Users related info shows on the screen", async () => {
      await waitFor(() => {
        expect(screen.getByTestId("userTypes")).toHaveTextContent("User Types");
      });
      fireEvent.click(screen.getByTestId("MANAGER"));

      await waitFor(() => {
        expect(screen.getByTestId("userTypeTitle")).toHaveTextContent(
          "Manager Users"
        );
        expect(
          screen.getByTestId("nameFirstLetterInCapital")
        ).toHaveTextContent("L");
        expect(screen.getByTestId("userName")).toHaveTextContent("Lynn Warr");
        expect(screen.getByTestId("userRole")).toHaveTextContent("Manager");
      });
    });

    it("Given App successfully loads the data, users select Manager type by clicking the input radio, then expect Manager Users related info shows on the screen", async () => {
      await waitFor(() => {
        expect(screen.getByTestId("userTypes")).toHaveTextContent("User Types");
      });
      fireEvent.click(screen.getByTestId("MANAGER-input"));

      await waitFor(() => {
        expect(screen.getByTestId("userTypeTitle")).toHaveTextContent(
          "Manager Users"
        );
        expect(
          screen.getByTestId("nameFirstLetterInCapital")
        ).toHaveTextContent("L");
        expect(screen.getByTestId("userName")).toHaveTextContent("Lynn Warr");
        expect(screen.getByTestId("userRole")).toHaveTextContent("Manager");
      });
    });
  });

  describe("Given unsuccessful response =>", () => {
    it("Given App has a network error, then expect 'Something is wrong. Please try again later.' is on the screen", async () => {
      render(
        <MockedProvider mocks={mockedNetWorkErrorResponse} addTypename={false}>
          <App />
        </MockedProvider>
      );
      await waitFor(() => {
        expect(
          screen.queryByText("Something is wrong. Please try again later.")
        ).toBeInTheDocument();
      });
    });
  });
});
