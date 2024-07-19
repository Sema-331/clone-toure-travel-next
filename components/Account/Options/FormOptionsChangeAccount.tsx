"use client";

import React, { useEffect, useState } from "react";
import edit from "./../../../public/images/Edit=True.png";
import add from "./../../../public/images/Property 1=ion_add-circle.png";
import Image from "next/image";
import "./../../../styles/Account/choice.scss";
import BtnNoFill from "@/components/BtnNoFill/BtnNoFill";
import { updateUser } from "@/services/UpdateInfoUser";

interface ServerInt {
  item: {
    id: string;
    userName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    lastName: string | null;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
    phoneNumber: string | null;
    backgroundImage: string | null;
    adress: string | null;
    date_birth: string | null;
  };
}

interface FormInt {
  Name: string;
  Email: string;
  Password: string;
  phoneNumber: string;
  Adress: string;
  DateOfBirth: string;
}

const FormOptionsChangeAccount = ({ item }: ServerInt) => {
  const [nameValue, setNameValue] = useState<string>(item.userName);
  const [emailValue, setEmailValue] = useState<string | null>(item.email);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(
    item.phoneNumber
  );
  const [adress, setAdress] = useState<string | null>(item.adress);
  const [dateBirth, setDateBirth] = useState<string | null>(item.date_birth);
  const [stateDate, setStateDate] = useState<string>("-");
  const [stateName, setStateName] = useState<boolean>(false);
  const [stateEmail, setStateEmail] = useState<boolean>(false);
  const [statePassword, setStatePassword] = useState<boolean>(false);
  const [statePhoneNumber, setStatePhoneNumber] = useState<boolean>(false);
  const [stateAddress, setStateAddress] = useState<boolean>(false);
  const [stateDateBirth, setStatedateBirth] = useState<boolean>(false);

  console.log(item.password);

  const handleClick = async () => {
    const res = await updateUser({
      userName: nameValue,
      email: emailValue,
      phoneNumber: phoneNumber,
      adress: adress,
      date_birth: dateBirth,
    });
    if (res.ok) {
      console.log("Все хорошо");
    } else if (!res.ok) {
      console.log("Все плохо");
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  console.log("first");

  return (
    <>
      <form
        key={item.id}
        onSubmit={handleClick}
        className="choice__block-account-user-info-inside"
      >
        {item.password}
        <div className="choice__block-uu-changes">
          <div className="choice__block-more-info-user">
            <div className="choice__block-inside">
              <label className="choice__description-name">Name</label>
              <input
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNameValue(e.target.value)
                }
                className="choice__description-value"
                value={
                  nameValue.slice(0, 1).toUpperCase() +
                  nameValue.slice(1).toLowerCase()
                }
              />
            </div>
            <BtnNoFill
              onclick={() => setStateName(!stateName)}
              type="button"
              className="choice__btn-change-value"
            >
              <Image
                src={edit}
                alt="image_edit_value"
                className="choice__image-btn"
              />
              <p className="choice__name-btn">Change</p>
            </BtnNoFill>
            {/* <button
              type="button"
              onClick={() => {
                setStateName(!stateName);
              }}
              className="choice__btn-change-value"
            >
              <Image
                src={edit}
                alt="image_edit_value"
                className="choice__image-btn"
              />
              <p className="choice__name-btn">Change</p>
            </button> */}
          </div>
          <div className="choice__block-more-info-user">
            <div className="choice__block-inside">
              <label
                className={
                  stateName
                    ? "choice__description-name-active"
                    : "choice__description-name"
                }
              >
                Email
              </label>
              <input
                type="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmailValue(e.target.value)
                }
                className="choice__description-value"
                value={emailValue as string}
              />
              {/* <p className='choice__description-value'>john.doe@gmail.com</p> */}
            </div>
            <div className="choice__block-uu">
              <BtnNoFill className="choice__btn-add-email">
                <Image
                  src={add}
                  alt="image_edit_value"
                  className="choice__image-btn"
                />
                <p className="choice__name-btn">Add another email</p>
              </BtnNoFill>
              <BtnNoFill className="choice__btn-change-value">
                <Image
                  src={add}
                  alt="image_edit_value"
                  className="choice__image-btn"
                />
                <p className="choice__name-btn">Change</p>
              </BtnNoFill>
              {/* <button className="choice__btn-add-email">
              <Image
                  src={add}
                  alt="image_edit_value"
                  className="choice__image-btn"
                />
                <p className="choice__name-btn">Add another email</p>
              </button> */}
              {/* <button className="choice__btn-change-value">
                <Image
                  src={edit}
                  alt="image_edit_value"
                  className="choice__image-btn"
                />
                <p className="choice__name-btn">Change</p>
              </button> */}
            </div>
          </div>
          <div className="choice__block-more-info-user">
            <div className="choice__block-inside">
              <p className="choice__description-name">Password</p>
              <p className="choice__description-value">***************</p>
            </div>
            <BtnNoFill className="choice__btn-change-value">
              <Image
                src={edit}
                alt="image_edit_value"
                className="choice__image-btn"
              />
              <p className="choice__name-btn">Change</p>
            </BtnNoFill>
            {/* <button className="choice__btn-change-value">
              <Image
                src={edit}
                alt="image_edit_value"
                className="choice__image-btn"
              />
              <p className="choice__name-btn">Change</p>
            </button> */}
          </div>
          <div className="choice__block-more-info-user">
            <div className="choice__block-inside">
              <label
                className={
                  stateName
                    ? "choice__description-name-active"
                    : "choice__description-name"
                }
              >
                Phone number
              </label>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhoneNumber(e.target.value)
                }
                type="text"
                className="choice__description-value"
                value={phoneNumber as string}
              />
            </div>
            <BtnNoFill className="choice__btn-change-value">
              <Image
                src={edit}
                alt="image_edit_value"
                className="choice__image-btn"
              />
              <p className="choice__name-btn">Change</p>
            </BtnNoFill>
            {/* <button className="choice__btn-change-value">
              <Image
                src={edit}
                alt="image_edit_value"
                className="choice__image-btn"
              />
              <p className="choice__name-btn">Change</p>
            </button> */}
          </div>
          <div className="choice__block-more-info-user">
            <div className="choice__block-inside">
              <p className="choice__description-name">Adress</p>
              <input
                placeholder="There's nothing here yet"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAdress(e.target.value)
                }
                type="text"
                className="choice__description-value"
                value={adress as string}
              />
            </div>
            <BtnNoFill className="choice__btn-change-value">
              <Image
                src={edit}
                alt="image_edit_value"
                className="choice__image-btn"
              />
              <p className="choice__name-btn">Change</p>
            </BtnNoFill>
            {/* <button className="choice__btn-change-value">
              <Image
                src={edit}
                alt="image_edit_value"
                className="choice__image-btn"
              />
              <p className="choice__name-btn">Change</p>
            </button> */}
          </div>
          <div className="choice__block-more-info-user">
            <div className="choice__block-inside">
              <p className="choice__description-name">Date of birth</p>
              <input
                placeholder="There's nothing here yet"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDateBirth(e.target.value)
                }
                type="text"
                className="choice__description-value"
                value={dateBirth as string}
              />
            </div>
            <BtnNoFill className="choice__btn-change-value">
              <Image
                src={edit}
                alt="image_edit_value"
                className="choice__image-btn"
              />
              <p className="choice__name-btn">Change</p>
            </BtnNoFill>
            {/* <button className="choice__btn-change-value">
              <Image
                src={edit}
                alt="image_edit_value"
                className="choice__image-btn"
              />
              <p className="choice__name-btn">Change</p>
            </button> */}
          </div>
        </div>
        <div className="choice__block-save-changes">
          <button type="submit" className="choice__btn-save">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default FormOptionsChangeAccount;
