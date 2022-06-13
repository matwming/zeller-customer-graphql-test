import { useEffect, useRef } from "react";

const ErrorScreen = () => {
  const errorRef = useRef(null);
  useEffect(() => {
    // @ts-ignore
    errorRef.current.focus();
  }, []);
  return (
    <p
      ref={errorRef}
      tabIndex={0}
      className={"m-3 p-3 bg-pink-500 font-semibold"}
      id={"errorMessage"}
    >
      Something is wrong. Please try again later.
    </p>
  );
};

export default ErrorScreen;
