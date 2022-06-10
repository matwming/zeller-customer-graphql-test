import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {ListZellerCustomers} from "./graphql/queries";
import './App.css';

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
    <div className="text-3xl font-bold underline">
      this is the app
    </div>
  );
}

export default App;
