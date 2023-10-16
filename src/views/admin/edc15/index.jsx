import Card from "components/card";
import UnderlineDropDown from "components/input/underlineDropDown";
import UnderlineInput from "components/input/underlineInput";
import React, { useState, useEffect } from "react";
import { FaRedo } from "react-icons/fa";

const EDC = () => {
  const [userSubmittedCaptcha, setUserSubmittedCaptcha] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");
  const [vin, setVin] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState(0);

  const [vinError, setVinError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const formData = new FormData();

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

  const mainFormSubmit = (e) => {
    e.preventDefault();
    formData.delete("vin");
    formData.delete("number");
    formData.delete("type");
    formData.delete("email", email);

    formData.append("vin", vin);
    formData.append("number", number);
    formData.append("type", type);
    formData.append("email", email);

    let vinCheck = new RegExp("[A-Z0-9a-z]{17}", "g").test(vin);
    let numberCheck = new RegExp("[0-9]{5}", "g").test(number);
    let typeCheck = new RegExp("[1-5]{1}", "g").test(type);
    let captchaTest = captchaCode === userSubmittedCaptcha ? true : false;
    let emailCheck = true;

    if (!vinCheck) {
      setVinError("Invalid Vin");
    } else {
      setVinError(""); // Reset error message if valid
    }
    if (!numberCheck) {
      setNumberError("Invalid number");
    } else {
      setNumberError(""); // Reset error message if valid
    }
    if (!captchaTest) {
      setCaptchaError("Invalid captcha");
      generateCaptchaCode();
    } else {
      setCaptchaError(""); // Reset error message if valid
    }
    if (!email || email === "") {
      setEmailError("Invalid email");
    } else {
      setEmailError(""); // Reset error message if valid
    }
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
      <div className="py-2 text-xl font-bold dark:text-white">EDC 15</div>
      <Card extra={"w-100 h-auto py-2"}>
        <form onSubmit={mainFormSubmit}>
          <input
            className="rounded-xs bg-white-50 mx-4 mt-6 mb-3 block w-auto cursor-pointer text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-darkThemeColor dark:text-gray-400 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />

          <UnderlineInput
            type={"text"}
            extra={"mx-4 my-2"}
            placeholder={"Vin Number"}
            onChange={(e) => {
              if (e.target.value.length <= 17) {
                setVin(e.target.value.toUpperCase());
                setVinError(""); // Reset error message when user makes changes
              }
            }}
          />
          {vinError && (
            <div className="error-message mx-6 text-xs text-red-700 dark:text-red-500">
              {vinError}
            </div>
          )}

          <UnderlineInput
            type={"email"}
            extra={"mx-4 my-2"}
            placeholder={"Enter your email"}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(""); // Reset error message when user makes changes
            }}
          />
          {emailError && (
            <div className="error-message mx-6 text-xs text-red-700 dark:text-red-500">
              {emailError}
            </div>
          )}

          <UnderlineInput
            type={"text"}
            extra={"mx-4 my-2"}
            placeholder={"datablock id/soft coding"}
            onChange={(e) => {
              if (e.target.value.length <= 5) {
                setNumber(e.target.value);
                setNumberError(""); // Reset error message when user makes changes
              }
            }}
          />
          {numberError && (
            <div className="error-message mx-6 text-xs text-red-700 dark:text-red-500">
              {numberError}
            </div>
          )}
          <UnderlineDropDown options={options} />
          <div className="grid grid-cols-7">
            <div className="col-span-2 m-4 py-1 text-xl dark:text-white">
              {captchaCode}
            </div>
            <div className="col-span-1 m-4 py-2">
              <FaRedo />
            </div>
            <div className="col-span-4">
              <UnderlineInput
                type={"text"}
                extra={"mx-4 my-2"}
                placeholder={"Captcha"}
              />
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

export default EDC;
