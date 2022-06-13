import { IZellerCustomer } from "../types/types";
import React from "react";
import { IValueDisplayService } from "../services/valueDisplayService";

const User = ({
  user,
  valueDisplayService,
}: {
  user: IZellerCustomer;
  valueDisplayService: ({}: IValueDisplayService) => string;
}): JSX.Element => {
  return (
    <div className="grid grid-rows-2 grid-flow-col  grid-cols-5 max-w-md mt-8 hover:bg-cyan-100 hover:rounded-md">
      <div
        className="row-span-3 justify-self-center self-center bg-cyan-50 py-3 px-5 m-1 rounded-md text-cyan-700"
        data-testid={"nameFirstLetterInCapital"}
      >
        {valueDisplayService({ value: user.name, onlyFirstLetter: true })}
      </div>
      <div className="col-span-2 ..." data-testid={"userName"}>
        {user.name}
      </div>
      <div
        className="row-span-2 col-span-2 text-slate-700 opacity-50"
        data-testid={"userRole"}
      >
        {valueDisplayService({ value: user.role })}
      </div>
    </div>
  );
};

export default User;
