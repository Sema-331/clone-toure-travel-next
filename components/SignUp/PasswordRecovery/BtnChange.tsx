"use client";

import React, { useState } from "react";

const BtnChange = () => {
  const [state, setState] = useState<boolean>(false);

  return (
    <button
      type="submit"
      onClick={() => setState(true)}
      className="login__btn-submit"
    >
      Submit
    </button>
  );
};

export default BtnChange;
