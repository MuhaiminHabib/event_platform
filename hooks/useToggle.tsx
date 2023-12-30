// import { useState } from "react";

// type inputProps = {
//   defaultValue: boolean;
// };
// const useToggle = (defaultValue: any) => {
//   const [value, setValue] = useState<boolean>(defaultValue);

//   const toggleValue = (value: any) => {
//     setValue((prev) => (typeof value === "boolean" ? value : !prev));
//   };

//   return [value, toggleValue];
// };

// export default useToggle;

import React, { useState } from "react";

const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (inputValue: boolean) => {
    setValue((prev) => (typeof value === "boolean" ? value : !prev));
  };
  return [value, toggleValue];
};

export default useToggle;
