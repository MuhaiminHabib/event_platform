import React, { useEffect, useRef } from "react";

type InputProps = {
  callback: () => {};
  dep: [];
};

const useUpdateEffect = ({ callback, dep }: InputProps) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender ? (isFirstRender.current = false) : callback();
  }, dep);
};

export default useUpdateEffect;
