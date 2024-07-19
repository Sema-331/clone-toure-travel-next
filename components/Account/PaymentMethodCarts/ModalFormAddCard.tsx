import React, { useState } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import Select from "react-select";
import { useAppDispatch } from "@/helperRedux/helperRedux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import close_modal from "./../../../public/images/Vector_close_modal.png";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PortalContainer from "@/components/PortalContainer/PortalContainer";

interface FormInt {
  cardholderName: string;
  cvc: string;
  expMonth: string;
  expYear: string;
  number: string;
  class_credit: {
    value: string;
    label: string;
  };
  findUser?: {
    id: string;
    userName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    lastName: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    date_birth: string | null;
  };
}

interface IntRef {
  setStateAddCard: React.Dispatch<React.SetStateAction<boolean>>;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  findUser: {
    password: string;
    createdAt: Date;
    updatedAt: Date;
    userName: string;
    id: string;
    email?: string | null;
    emailVerified: Date | null;
    image: string | null;
    name: string | null;
    backgroundImage: string | null;
    phoneNumber: string | null;
    adress: string | null;
    date_birth: string | null;
  } | null;
}

const ModalFormAddCard = ({ setState, setStateAddCard, findUser }: IntRef) => {
  const client = useQueryClient();
  const dispatch = useAppDispatch();
  console.log("type...");

  const [stateInput, setStateInput] = useState<boolean>(false);

  const router = useRouter();

  const options = [
    { value: "Russia", label: "Russia" },
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
  ];

  const {
    watch,
    register,
    reset,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInt>({
    mode: "onBlur",
  });

  const {
    field: cardNumberField,
    fieldState: { error: cardNumberError },
  } = useController({
    control,
    name: "number",
    rules: {
      required: "Can't be blank",
      minLength: {
        value: 19,
        message: "Incomplete card number",
      },
      pattern: {
        value: /^(?=.*\d)[\d ]+$/,
        message: "Wrong format, numbers only",
      },
    },
  });

  const [isComplete, setIsComplete] = useState<boolean>(false);

  // const handleCickOutModal = (e: any) => {
  //   if (ref.current && ref.current.contains(e.target)) {
  //       setState(true)
  //   } else if (ref.current && !ref.current.contains(e.target)) {
  //       setState(false)
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('click', handleCickOutModal)
  //   return () => {
  //       document.removeEventListener('click', handleCickOutModal)
  //   }
  // }, ['cgc'])

  async function onSubmit(data: FormInt) {
    // event.preventDefault();
    const card = watch();
    const res = await fetch("/api/AddCreditCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cardholderName: data.cardholderName,
        cvc: data.cvc,
        expMonth: data.expMonth,
        expYear: data.expYear,
        card_number: data.number,
        country_of_region: data.class_credit.value,
        idUser: findUser?.id,
      }),
    });
    if (res.ok) {
      // router.refresh()
      console.log("Все хорошо");
      setStateAddCard(true);
      setState(false);
    }
    console.log("Все плохо");
    if (
      card.cardholderName &&
      card.cvc &&
      card.expMonth &&
      card.expYear &&
      card.number &&
      stateInput
    ) {
      setStateAddCard(true);
      setState(false);
    }
    // Send data to backend 👇
    console.log(data);
    // setIsComplete(true);
    reset({});
  }

  function handleContinue() {
    setIsComplete(false);
    reset();
  }

  function formatCardNumber(numberStr: any) {
    return numberStr
      .replace(/\W/gi, "")
      .replace(/(.{4})/g, "$1 ")
      .substring(0, 19);
  }

  const mutation = useMutation({
    mutationFn: onSubmit,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["credit_card"] });
    },
  });

  const handleAddCreditCard = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      cardholderName: watch("cardholderName"),
      cvc: watch("cvc"),
      expMonth: watch("expMonth"),
      expYear: watch("expYear"),
      number: watch("number"),
      class_credit: watch("class_credit"),
    };
    mutation.mutate(data);
  };

  return (
    <PortalContainer>
      <div className="create__block-main">
        <div className="create__block-image">
          <button onClick={() => setState(false)}>
            <Image
              src={close_modal}
              alt="image_close-modal"
              className="create__image-close"
            />
          </button>
        </div>
        <div className="create__block-form-add-credit-card">
          <h2 className="create__header-modal">Add a new Card</h2>
          <form onSubmit={handleAddCreditCard} action="">
            <div className="create__block-main-fileds-card">
              <div className="create__block-form-field">
                <label htmlFor="card-number" className="create__label-field">
                  Card Number
                </label>
                <input
                  type="text"
                  id="card-number"
                  className="create__input-field"
                  onChange={(e) => {
                    cardNumberField.onChange(formatCardNumber(e.target.value));
                  }}
                  placeholder="0000 0000 0000 0000"
                  onBlur={cardNumberField.onBlur}
                  value={cardNumberField.value}
                  ref={cardNumberField.ref}
                  inputMode="numeric"
                />
                {cardNumberError && (
                  <p className="error">{cardNumberError.message}</p>
                )}
              </div>
              <div className="create__block-two-field">
                <div className="create__block-field-date">
                  <label
                    htmlFor="card-exp-month"
                    className="create__label-field"
                  >
                    EXP. DATE (MM/YY)
                  </label>
                  <div className="create__block-uu-fields">
                    <input
                      type="text"
                      className="create__input-field"
                      id="card-exp-month"
                      {...register("expMonth", {
                        min: { value: 1, message: "Invalid date" },
                        max: { value: 12, message: "Invalid date" },
                        required: "Can't be blank",
                      })}
                      maxLength={2}
                      inputMode="numeric"
                      placeholder="MM"
                    />
                    <input
                      type="text"
                      className="create__input-field-second"
                      id="card-exp-month"
                      {...register("expYear", {
                        required: "Can't be blank",
                        min: {
                          value: new Date().getFullYear() % 2000,
                          message: "Invalid date",
                        },
                        max: {
                          value: 99,
                          message: "Invalid date",
                        },
                      })}
                      maxLength={2}
                      inputMode="numeric"
                      placeholder="YY"
                    />
                  </div>
                  {(errors.expMonth && (
                    <p className="error">{errors.expMonth.message}</p>
                  )) ||
                    (errors.expYear && (
                      <p className="error">{errors.expYear.message}</p>
                    ))}
                </div>
                <div className="create__block-field-cvc">
                  <label htmlFor="" className="create__label-field">
                    CVC
                  </label>
                  <input
                    type="text"
                    className="create__input-field"
                    {...register("cvc", {
                      pattern: {
                        value: /[0-9]{3}/,
                        message: "Must be 3 digits",
                      },
                      required: "Can't be blank",
                    })}
                    maxLength={3}
                    inputMode="numeric"
                    placeholder="e.g. 123"
                  />
                  {errors.cvc && <p className="error">{errors.cvc.message}</p>}
                </div>
              </div>
              <div className="create__block-form-field">
                <label htmlFor="" className="create__label-field">
                  Name on Card
                </label>
                <input
                  type="text"
                  className="create__input-field"
                  {...register("cardholderName", {
                    required: "Can't be blank",
                  })}
                  placeholder="e.g. Jane Appleseed"
                />
                {errors.cardholderName && (
                  <p className="error">{errors.cardholderName.message}</p>
                )}
              </div>
              <div
                onClick={() => setState(true)}
                className="create__block-form-field"
              >
                <label
                  htmlFor=""
                  onClick={() => setState(true)}
                  className="create__label-field"
                >
                  Country of Region
                </label>
                <Controller
                  control={control}
                  name="class_credit"
                  rules={{ required: true }}
                  render={(renderProps) => {
                    const { ref, ...rest } = renderProps.field;
                    return (
                      <Select
                        onClick={() => setState(true)}
                        options={options}
                        menuPlacement="auto"
                        isSearchable={true}
                        {...register("class_credit")}
                        {...renderProps.field}
                        onChange={(e) => {
                          console.log(e);
                          renderProps.field.onChange(e);
                        }}
                      />
                    );
                  }}
                />
              </div>
            </div>
            <div className="create__block-agree">
              <input
                onChange={() => setStateInput(!stateInput)}
                checked={stateInput}
                type="checkbox"
                className="create__input-agree"
              />
              <p className="create__description-agree">
                Securely save my information for 1-click checkout
              </p>
            </div>
            <button type="submit" className="create__btn-add-card">
              Add Card
            </button>
          </form>
          <p className="create__description-footer">
            By confirming your subscription, you allow The Outdoor Inn Crowd
            Limited to charge your card for this payment and future payments in
            accordance with their terms. You can always cancel your
            subscription.
          </p>
        </div>
      </div>
    </PortalContainer>
  );
};

export default ModalFormAddCard;
