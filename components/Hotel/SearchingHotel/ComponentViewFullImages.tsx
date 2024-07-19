"use client";

import React, { useState } from "react";

const ComponentViewFullImages = () => {
  const [state, setState] = useState<boolean>(false);

  return <button className="hotel__btn-view-images">9 images</button>;
};

export default ComponentViewFullImages;
