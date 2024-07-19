import Image from "next/image";
import React from "react";
import icon_close from "./../../../public/images/close_icon.svg";

interface PropDate {
  stateName: string;
  setSDtateModal: (v: boolean) => void;
}

const ModalConfirmLoadImage = ({ stateName, setSDtateModal }: PropDate) => {
  return (
    <div className="board-user__block-modal-confirm">
      <h2 className="board-user__header-ask">
        Do you really want to download this file?
      </h2>
      <div className="board-user__block-file-name">
        <p className="board-user__description-file-name">
          File: <span>{stateName}</span>
        </p>
      </div>
      <div className="board-user__block-action">
        <button className="board-user__btn-back">Cancel</button>
        <button className="board-user__btn-load">Save</button>
      </div>
      <button
        type="button"
        onClick={() => setSDtateModal(false)}
        className="board-user__btn-close"
      >
        <Image src={icon_close} alt="icon_close" />
      </button>
    </div>
  );
};

export default ModalConfirmLoadImage;
