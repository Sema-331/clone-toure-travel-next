import BtnNoFill from "@/components/BtnNoFill/BtnNoFill";
import InputField from "@/components/FormEvents/InputField/InputField";
import { X } from "lucide-react";
import React from "react";
import { z } from "zod";

interface PropDate {
  register: any;
  setState: (v: boolean) => void;
  stateInput: string;
  setStateInput: (v: string) => void;
  handleClickAddPromo: () => void;
}

const schemaZod = z.object({
  promo_code: z.string().min(1, "Minimum 2 symbol"),
});

type InputType = z.infer<typeof schemaZod>;

const ModalPromoCode = ({
  setState,
  register,
  stateInput,
  setStateInput,
  handleClickAddPromo,
}: PropDate) => {
  return (
    <div className="search__btn-block-modal-add-promo">
      <X onClick={() => setState(false)} />
      <label className="search__btn-label-modal-promo" htmlFor="">
        Enter your code
      </label>
      <div className="search__btn-block-input-promo">
        <InputField
          type="text"
          data-testid="jojo"
          className="search__btn-input-promo"
          register={register("promo_code")}
          placeholder="Type..."
          value={stateInput}
          onChange={(e) => setStateInput(e.target.value)}
        />
        <BtnNoFill
          data-testid="koko"
          onclick={handleClickAddPromo}
          className="search__btn-add-promo-code"
        >
          Add
        </BtnNoFill>
        {/* <button
          data-testid="koko"
          onClick={handleClickAddPromo}
          className="search__btn-add-promo-code"
        >
          Add
        </button> */}
      </div>
    </div>
  );
};

export default ModalPromoCode;
