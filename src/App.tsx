import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {ListZellerCustomers} from "./graphql/queries";

function App() {
  const ListZellerCustomersQuery = gql`${ListZellerCustomers}`;
    const {
        loading,
        data,
        error,
    } = useQuery(ListZellerCustomersQuery);
    console.log('loading',loading);
    console.log('data',data);
    console.log('error',error)

  return (
    <div className="App">
      this is the app
    </div>
  );
}

export default App;
