import Link from "next/link";
import React, { ReactNode } from "react";

const BtnNoFill = ({
  children,
  className,
  href,
  type,
  onclick,
  testid,
}: {
  testid?: string;
  onclick?: () => void;
  type?: "button" | "submit";
  href?: string;
  children: ReactNode;
  className: string;
}) => {
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button
      data-testid={testid}
      onClick={onclick}
      type={type}
      className={className}
    >
      {children}
    </button>
  );
};

export default BtnNoFill;
