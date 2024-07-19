"use client";

import Link from "next/link";
import React, { useState } from "react";
import classNames from "classnames";

interface IntChoice {
  choice_page: string;
}

const OptionsChoice = ({ choice_page }: IntChoice) => {
  const [state, setState] = useState<String>(choice_page);
  console.log("choice");
  return (
    <div className="choice__dashboard-block">
      <Link
        href="/Account"
        onClick={() => setState("account")}
        className={classNames({
          "choice__block-dashboard-inside-account-active": state === "account",
          "choice__block-dashboard-inside-account": state !== "account",
        })}
      >
        <div className="choice__block-dashboard-description-account">
          <p className="choice__name-opt">Account</p>
        </div>
      </Link>
      <Link
        href="/Account/History"
        className={classNames({
          "choice__block-dashboard-inside-history-active": state === "history",
          "choice__block-dashboard-inside-history": state !== "history",
        })}
        onClick={() => setState("history")}
      >
        <div className="choice__block-dashboard-description-history">
          <p className="choice__name-opt">History</p>
        </div>
      </Link>
      <Link
        href="/Account/Payment_method"
        onClick={() => setState("payment method")}
        className={classNames({
          "choice__block-dashboard-inside-pay-method-active": state === "pay",
          "choice__block-dashboard-inside-pay-method": state !== "pay",
        })}
      >
        <div className="choice__block-dashboard-description-pay-method">
          <p className="choice__name-opt">Payment methods</p>
        </div>
      </Link>
    </div>
  );
};

export default OptionsChoice;
