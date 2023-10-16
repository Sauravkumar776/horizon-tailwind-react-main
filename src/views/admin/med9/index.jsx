import Card from "components/card";
import UnderlineDropDown from "components/input/underlineDropDown";
import UnderlineInput from "components/input/underlineInput";
import React, { useState, useEffect } from "react";
import { FaRedo } from "react-icons/fa";

const MED9 = () => {
  const [userSubmittedCaptcha, setUserSubmittedCaptcha] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");
  const [KFZW, setKFZW] = useState("");
  const [KFZW2, setKFZW2] = useState("");
  const [LAMFA, setLAMFA] = useState("");
  const [KRKATE, setKRKATE] = useState("");
  const [KDLDRL, setKDLDRL] = useState("");

  const generateCaptchaCode = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaCode = "";
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captchaCode += characters[randomIndex];
    }
    return captchaCode;
  };

  const generateNewCaptcha = () => {
    const newCaptchaCode = generateCaptchaCode();
    setCaptchaCode(newCaptchaCode);
    setUserSubmittedCaptcha("");
  };

  useEffect(() => {
    generateNewCaptcha();
  }, []);

  const options = [
    { value: "Launch Control", label: "Launch Control \u20AC70" },
    {
      value: "MapSwitch with cruise control",
      label: "MapSwitch with cruise control \u20AC65",
    },
    { value: "MapSwitch with pedals", label: "MapSwitch with pedals \u20AC65" },
    {
      value: "LC + MapSwitch with cruise control",
      label: "LC + MapSwitch with cruise control \u20AC125",
    },
    {
      value: "LC + MapSwitch with pedals",
      label: "LC + MapSwitch with pedals \u20AC125",
    },
  ];

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="py-2 text-xl font-bold dark:text-white">MED 9</div>
      <Card extra={"w-100 h-150 py-2"}>
        <form>
          <input
            class="rounded-xs bg-white-50 mx-4 mt-6 mb-3 block w-auto cursor-pointer text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-darkThemeColor dark:text-gray-400 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />

          <div className="grid grid-cols-10">
            <div className="col-span-1 my-4 ml-4">0X</div>
            <div className="col-span-8">
              <UnderlineInput
                type={"text"}
                placeholder={"KFZW Hexadecimal"}
                extra={"mx-4 my-2"}
                onChange={(e) => {
                  setKFZW(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-10">
            <div className="col-span-1 my-4 ml-4">0X</div>
            <div className="col-span-8">
              <UnderlineInput
                type={"text"}
                placeholder={"KFZW2 Hexadecimal"}
                extra={"mx-4 my-2"}
                onChange={(e) => {
                    setKFZW2(e.target.value);
                  }}
              />
            </div>
          </div>
          <div className="grid grid-cols-10">
            <div className="col-span-1 my-4 ml-4">0X</div>
            <div className="col-span-8">
              <UnderlineInput
                type={"text"}
                placeholder={"LAMFA Hexadecimal"}
                extra={"mx-4 my-2"}
                onChange={(e) => {
                    setLAMFA(e.target.value);
                  }}
              />
            </div>
          </div>
          <div className="grid grid-cols-10">
            <div className="col-span-1 my-4 ml-4">0X</div>
            <div className="col-span-8">
              <UnderlineInput
                type={"text"}
                placeholder={"KRKATE Hexadecimal"}
                extra={"mx-4 my-2"}
                onChange={(e) => {
                    setKRKATE(e.target.value);
                  }}
              />
            </div>
          </div>
          <div className="grid grid-cols-10">
            <div className="col-span-1 my-4 ml-4">0X</div>
            <div className="col-span-8">
              <UnderlineInput
                type={"text"}
                placeholder={"KDLDRL Hexadecimal"}
                extra={"mx-4 my-2"}
                onChange={(e) => {
                    setKDLDRL (e.target.value);
                  }}
              />
            </div>
          </div>
          <UnderlineInput type={"email"} extra={"mx-4 my-2"} placeholder={"Enter your email"} />
          <UnderlineDropDown options={options} />
          <div className="grid grid-cols-7">
            <div className="col-span-2 m-4 py-1 text-xl dark:text-white">
              {captchaCode}
            </div>
            <div className="col-span-1 m-4 py-2">
              <FaRedo />
            </div>
            <div className="col-span-4">
              <UnderlineInput type={"text"} extra={"mx-4 my-2"} placeholder={"Captcha"} />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="linear mx-4 w-100 rounded-xl bg-submitButtonBgColor py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              Submit
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default MED9;
