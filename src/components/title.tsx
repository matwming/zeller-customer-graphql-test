import React from "react";

const Title = ({ value, testid }: { value: string; testid: string }) => {
  return (
    <p className={"font-semibold text-3xl my-6"} data-testid={testid}>
      {value}
    </p>
  );
};

export default Title;
