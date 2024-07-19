import React from "react";
import { createPortal } from "react-dom";

const PortalContainer = ({ children }: { children: React.ReactNode }) => {
  const modalElem = document.getElementById("modal");

  return createPortal(<>{children}</>, modalElem);
};

export default PortalContainer;
