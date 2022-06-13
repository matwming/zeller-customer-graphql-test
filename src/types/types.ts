export interface IZellerCustomer {
  email: string;
  id: string;
  name: string;
  role: RoleType;
}
export type RoleType = "ADMIN" | "MANAGER";

export interface IListZellerCustomersQuery {
  listZellerCustomers: {
    items: IZellerCustomer[];
  };
}
