import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { ListZellerCustomers } from "./graphql/queries";
import { IListZellerCustomersQuery, RoleType } from "./types/types";
import User from "./components/user";
import valueDisplayService from "./services/valueDisplayService";
import Title from "./components/title";
import withErrorBoundary from "./errorBoundary/errorBoundary";
import ErrorScreen from "./components/errorScreen";
import { Loading } from "./components/loading";

export const ListZellerCustomersQuery = gql`
  ${ListZellerCustomers}
`;

function App() {
  const [selectedCustomerType, setSelectCustomers] = useState<RoleType>(
    "" as RoleType
  );

  const [_, setErrorState] = useState(null);

  const {
    loading,
    data,
    error,
  }: {
    loading: boolean;
    data: IListZellerCustomersQuery | undefined;
    error?: any;
  } = useQuery(ListZellerCustomersQuery);

  if (error) {
    setErrorState(() => {
      throw "Error";
    });
  }

  const availableRoles = new Set(
    data?.listZellerCustomers.items.map((customer) => customer.role)
  );

  const roleClickHandler = (value: RoleType): void => {
    setSelectCustomers(value);
  };

  const renderRoleTypeSelection = () => {
    return [...availableRoles]
      .sort((a, b) => a.localeCompare(b))
      .map((role) => {
        return (
          <div
            className={
              "flex items-center m-2 pt-3 pb-3 hover:bg-cyan-50 hover:rounded-md hover:cursor-pointer"
            }
            onClick={() => roleClickHandler(role)}
            data-testid={role}
            key={role}
          >
            <input
              type="radio"
              className="m-1 mr-2 ml-3 accent-blue-500 hover:cursor-pointer"
              id={`${role}`}
              data-testid={`${role}-input`}
              onChange={(e) => roleClickHandler(e.target.value as RoleType)}
              value={`${role}`}
              checked={selectedCustomerType === role}
            />
            <label htmlFor={`${role}`}>
              {valueDisplayService({ value: role })}
            </label>
          </div>
        );
      });
  };

  const renderTitle = () => {
    return (
      selectedCustomerType && (
        <Title
          value={`${valueDisplayService({
            value: selectedCustomerType,
          })} Users`}
          testid={"userTypeTitle"}
        />
      )
    );
  };

  return (
    <div className="container mx-auto">
      <Loading value={"loading data..."} testid={"loading"} loading={loading}>
        <>
          <Title value={"User Types"} testid={"userTypes"} />

          <div className={"mb-10"}>{renderRoleTypeSelection()}</div>

          <hr />

          {renderTitle()}

          {data?.listZellerCustomers.items
            .filter((customer) => customer.role === selectedCustomerType)
            .map((user) => {
              return (
                <User
                  user={user}
                  valueDisplayService={valueDisplayService}
                  key={user.id}
                />
              );
            })}
        </>
      </Loading>
    </div>
  );
}

export default withErrorBoundary(App, { FallbackUIComponent: ErrorScreen });
