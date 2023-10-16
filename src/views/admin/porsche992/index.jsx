import Card from "components/card";
import UnderlineDropDown from "components/input/underlineDropDown";
import UnderlineInput from "components/input/underlineInput";
import React, { useState, useEffect } from "react";
import { FaRedo } from "react-icons/fa";
import PorscheModal from "./components/PorscheModal";

const Porsche992 = () => {
  const [userSubmittedCaptcha, setUserSubmittedCaptcha] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");
  const [vin, setVin] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState(0);
  const [mapSlots, setMapSlots] = useState(3);

  const [vinError, setVinError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [typeError, setTypeError] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [showModal, setShowModal] = useState(false)

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

const closeModal = () => {
setShowModal(false)
}

  const options = [
    {
      value: 0,
      label: "MapSwitch with cruise control \u20AC65",
    },
    { value: 1, label: "MapSwitch with acc and brake pedals \u20AC65" },
  ];

  const mapSlotsOption = [
    {
      value: 3,
      label: "3 Map Slots",
    },
    {
      value: 4,
      label: "4 Map Slots",
    },
  ];

  return (
    <div className="flex h-screen flex-col items-center justify-center">

       {showModal && <PorscheModal onClose={ () => closeModal()}/>}
      <div className="py-2 text-xl font-bold dark:text-white">Porsche 992</div>
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

          <UnderlineDropDown
            options={options}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />

          <UnderlineDropDown
            options={mapSlotsOption}
            onChange={(e) => {
              setMapSlots(e.target.value);
            }}
          />
          <div className="px-4 ">
            {" "}
            <div className="flex justify-center rounded-xl bg-teal-500 py-2"
            onClick={() => setShowModal(true)}
            >
              Select Maps
            </div>
          </div>
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

export default Porsche992;
