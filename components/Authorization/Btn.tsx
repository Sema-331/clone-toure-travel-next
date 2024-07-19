import React from "react";

interface BtnInt {
  btn_content: string;
  checked?: boolean;
}

const Btn = ({ btn_content }: BtnInt) => {
  return (
    <button type="submit" className="login__btn-submit">
      {btn_content}
    </button>
  );
};

export default Btn;
