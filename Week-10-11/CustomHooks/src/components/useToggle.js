import { useState } from "react";
export const useToggle = (initialVal = false) => {
  const [state, setstate] = useState(false);

  const toggle = () => {
    setstate((prev) => !prev);
  };

  return [state, toggle];
};
