"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

export const ToggleModalClose = (classActive: string) => {
  const [state, setState] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleToggleComponent = useCallback((e: MouseEvent) => {
    if (ref.current && ref.current.contains(e.target as HTMLDivElement)) {
      setState(true);
      console.log(true);
    } else if (
      ref.current &&
      !ref.current.contains(e.target as HTMLDivElement)
    ) {
      setState(false);
      console.log(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleToggleComponent);
    return () => {
      document.removeEventListener("click", handleToggleComponent);
    };
  }, [classActive]);

  return { state, ref, setState };
};
