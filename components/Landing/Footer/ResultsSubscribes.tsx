import Image from "next/image";
import React, { memo } from "react";
import danger_icon from "./../../../public/images/danger_icon_red.svg";
import success from "./../../../public/images/Success_change_back.svg";

interface PropInt {
  stateModalError: boolean;
  stateModal: boolean;
}

const ResultsSubscribes = memo(({ stateModalError, stateModal }: PropInt) => {
  console.log("modal");
  return (
    <>
      {stateModal ? (
        <div className="footer__pop-up-timout">
          <Image
            className="footer__pop-up-successful"
            src={success}
            alt="icon_success"
          />
          <p data-testid="lolo" className="footer__description-txt-operation">
            You have successfully subscribed to the updates
          </p>
        </div>
      ) : null}
      {stateModalError ? (
        <div className="footer__pop-up-timout-error">
          <Image
            className="footer__pop-up-successful-error"
            src={danger_icon}
            alt="icon_error"
          />
          <p className="footer__description-txt-operation-error">Error</p>
        </div>
      ) : null}
    </>
  );
});

export default ResultsSubscribes;
