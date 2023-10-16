import React, { useContext, useEffect, useState } from "react";
// import { MapContext } from "../../context/MapContext";
// Custom Checkbox Component
export default function CustomCheckbox({
  id,
  label,
  checked,
  onChange,
  placeholder,
  onInputChange,
  onRowsInputChange,
  onColumnsInputChange,
  onDataTypeInputChange
}) {
  // const [showHexError, setShowHexError] = useState(false);
  // const [hexErrorText, setHexErrorText] = useState("");
  // const [showRowError, setShowRowError] = useState(false);
  // const [rowErrorText, setRowErrorText] = useState("");
  // const [showColError, setShowColError] = useState(false);
  // const [colErrorText, setColErrorText] = useState("");
  // const [errorText, setErrorText] = useState("");
  // const { mapError, setMapError } = useContext(MapContext);

  // const handleInputChange = (e) => {
  //   // Call the onInputChange prop with the id and input value
  //   onInputChange(id, e.target.value);
  //   console.log(
  //     "this is the input box in the checkbox component",
  //     e.target.value
  //   );
  //   const value = e.target.value;
  //   console.log("this is the value length", value.length);
  //   const result = isHexadecimal(value);
  //   console.log("this is the result", result);
  //   if (!result) {
  //     setShowHexError(true);
  //     setHexErrorText("Invalid Input");
  //   } else if (value.length < 4 || value.length > 7) {
  //     setShowHexError(true);
  //     setHexErrorText("Invalid Input");
  //   } else if (value.trim() === "") {
  //     setShowHexError(true);
  //     setHexErrorText("Map address can't be blank");
  //   } else {
  //     setShowHexError(false);
  //     setHexErrorText("");
  //   }
  // };

  // const handleRowsInputChange = (e) => {
  //   onRowsInputChange(id, e.target.value);
  //   if (typeof e.target.value !== "number") {
  //     setShowRowError(true);
  //     setErrorText("Row value can only be integer");
  //   }
  //   const value = parseInt(e.target.value);
  //   console.log(typeof value, "this is the type of the value in the row ");
  //   if (value > 100) {
  //     setShowRowError(true);
  //     setRowErrorText("Row value can't be more than 100");
  //   } else if (value < 0) {
  //     setShowRowError(true);

  //     setRowErrorText("Row value can't be negative");
  //   } else {
  //     setShowRowError(false);
  //     setRowErrorText("");
  //   }
  //   console.log("this is the row in the checkbox field", value);
  // };

  // const handleColumnsInputChange = (e) => {
  //   onColumnsInputChange(id, e.target.value);
  //   if (typeof e.target.value !== "number") {
  //     setShowColError(true);
  //     setColErrorText("Column value can only be integer");
  //   }
  //   const value = parseInt(e.target.value);
  //   if (value > 100) {
  //     setShowColError(true);
  //     setColErrorText("Column value can't be more than 100");
  //   } else if (value < 0) {
  //     setShowColError(true);
  //     setColErrorText("Column value can't be negative");
  //   } else {
  //     setShowColError(false);
  //     setColErrorText("");
  //   }
  //   console.log(
  //     "this is the column value in the checkbox field",
  //     value,
  //     typeof value
  //   );
  // };

  // const handleDataTypeChange = (e) => {
  //   console.log("this is in the handleDataType",e.target.value)
  //   onDataTypeInputChange(id,e.target.value)
  // }

  // function isHexadecimal(input) {
  //   const hexRegex = /^[0-9A-Fa-f]+$/g;
  //   return hexRegex.test(input);
  // }

  // useEffect(() => {
  //   if (showColError || showHexError || showRowError) {
  //     setMapError(true);
  //   } else {
  //     setMapError(false);
  //   }
  //   console.log(mapError, "this is the setMapError in the useEffect");
  // }, [showColError, showHexError, showRowError]);

  return (
    <div>
      <div className="flex items-start py-1">
        <div className="flex items-center h-5">
          <input
            id={id}
            type="checkbox"
            value=""
            className="w-3 h-3 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            onChange={onChange}
            checked={checked}
          />
        </div>
        <label
          htmlFor={id}
          className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      </div>
      {checked && (
        <>
          <div className="flex">
            <div className="pr-2">
              <div className="text-sm"> Map Address</div>
              <div className="flex ">
                <div className="p-1">0X</div>
                <input
                  type="text"
                  name={id}
                  id={id + "-mapAddress"}
                  placeholder={placeholder}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block xl:w-56 md:w-56 p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-2"
                  required // Make the input field required when the checkbox is checked
                 // onChange={handleInputChange} // Handle input changes
                />
              </div>
            </div>

            <div className="pr-2">
              <div className="text-sm">Columns</div>
              <div>
                <input
                  type="text"
                  name={id}
                  id={id + "-column"}
                  placeholder="Columns"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-2"
                  required // Make the input field required when the checkbox is checked
                 // onChange={handleColumnsInputChange} // Handle input changes
                />
              </div>
            </div>

            <div className="pr-2">
              <div className="text-sm"> Rows</div>
              <div>
                <input
                  type="text"
                  name={id}
                  id={id + "-row"}
                  placeholder="Rows"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-2"
                  required // Make the input field required when the checkbox is checked
                 // onChange={handleRowsInputChange} // Handle input changes
                />
              </div>
            </div>

            <div className="pr-2">
              <div className="text-sm"> DataType</div>
              <div>
                <select
                  name={id}
                  id={id + "-datatypes"}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-2"
                 // onChange={handleDataTypeChange}
                >
                  <option value="">Select an option</option>
                  <option value="eByte">eByte</option>
                  <option value="eFloat">eFloat</option>
                  <option value="eLoHi">eLoHi</option>
                </select>
              </div>
            </div>


          </div>
          {/* {showHexError && (
            <div className="text-xs text-errorTextColor"> {hexErrorText}</div>
          )}
          {showRowError && (
            <div className="text-xs text-errorTextColor"> {rowErrorText}</div>
          )}
          {showColError && (
            <div className="text-xs text-errorTextColor"> {colErrorText}</div>
          )} */}
        </>
      )}
    </div>
  );
}
