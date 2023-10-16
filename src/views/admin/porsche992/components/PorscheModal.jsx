import React, { useState, useEffect, useContext } from "react";
import CustomCheckbox from './CustomCheckbox'
// import { MapContext } from "../../context/MapContext";

export default function PorscheModal({ onClose }) {
  const labels = [
    { id: "CWZWGRU", price: "100", qty: "1", label: "CWZWGRU" },
    { id: "CWMDAPP", price: "100", qty: "1", label: "CWMDAPP" },
    { id: "KFLBTS", price: "100", qty: "1", label: "KFLBTS" },
    { id: "KFLBTSLBKO", price: "100", qty: "1", label: "KFLBTSLBKO" },
    { id: "KFLBTSLBSP", price: "100", qty: "1", label: "KFLBTSLBSP" },
    { id: "KFLDRL", price: "100", qty: "1", label: "KFLDRL" },
    { id: "CWMDRLMX", price: "100", qty: "1", label: "CWMDRLMX" },
    { id: "KRKATE", price: "100", qty: "1", label: "KRKATE" },
    { id: "KRKATEPFI", price: "100", qty: "1", label: "KRKATEPFI" },
    { id: "KFLDRAPPW", price: "100", qty: "1", label: "KFLDRAPPW" },
    { id: "PVDSRXABS", price: "100", qty: "1", label: "PVDSRXABS" },
  ];

//   const {
//     totalPrice,
//     setTotalPrice,
//     selectedMaps,
//     setSelectedMaps,
//     totalSelectedMaps,
//     setTotalSelectedMaps,
//     showMapModal,
//     setShowMapModal,
//     setMapError,
//     mapError,
//     setCsvFile,
//     setMapDataFromCSV,
//     setDataFromCSVFile
//   } = useContext(MapContext);
  const [inputValues, setInputValues] = useState({});
  const [checkedState, setCheckedState] = useState({});
  const [error, setError] = useState("");
  // State to hold the parsed CSV data
  const [csvData, setCsvData] = useState([]);
  const [showCSV, setShowCSV] = useState(false)
  // State variable to store the search query
  const [searchQuery, setSearchQuery] = useState("");
  const [isDataEntered, setIsDataEntered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  let mapData = [];

  // Function to handle changes in the search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to check if a label matches the search query
  const doesLabelMatchSearch = (label) => {
    return label.toLowerCase().includes(searchQuery.toLowerCase());
  };


//   function validateHex(value) {
//     console.log("validateHex working")
//     const result = isHexadecimal(value)
//     const length = value.length
//     console.log("this is the  validateHex",result && length > 3 && length <8)
//     return result && length > 3 && length <8
//   }
  
//   function isHexadecimal(input) {
//     const hexRegex = /^[0-9A-Fa-f]+$/g;
//     return hexRegex.test(input);
//   }

//   function validateInteger(value) {
//     const intValue = parseInt(value, 10);
//     return !isNaN(intValue) && intValue >= 0 && intValue <= 100;
//   }

//   const validataCsvData = (csvData) => {
//     const isValid = csvData.every(row => (
//         row.Columns !== '' &&
//         row.Rows !== '' &&
//         validateInteger(row.Columns) &&
//         validateInteger(row.Rows) &&
//         validateHex(row['Fieldvalues.StartAddr'].replace(/"/g, ''))
//       ));

//       return isValid;

//   }

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const fileType = file.type;
//       if (fileType === "text/csv") {
//         setError("");
//         setSelectedOption('file');
//         setIsDataEntered(true);
//         console.log("this is the csv file in the handle file upload", file);
//         const reader = new FileReader();
       
//         reader.onload = (e) => {
//           const content = e.target.result;
//           try{
//           parseCSV(content); // Parse the CSV content
//           console.log("this is the csvData in the handleFileUpload",csvData)
//           setCsvFile(content)
//           }
//           catch(error){
//             console.log("this is the error in the parse",error)
//             setError("Please upload a relevant file")
//             setIsDataEntered(false);
//           }
//           //   onFileUpload(content);
//         };

//         reader.readAsText(file);
//       } else {
//         setError("Please upload a CSV file.");
//         setSelectedOption(null); // Reset selected option when invalid CSV is uploaded
//         setIsDataEntered(false);
//       }
//     }
//   };

//   // Function to parse the CSV content
//   const parseCSV = (csvContent) => {
//     const lines = csvContent.split("\n");
//     const headers = lines[0].split(";");
//     const data = [];

//     for (let i = 1; i < lines.length; i++) {
//       const values = lines[i].split(";");
//       console.log("this is the values in the parseCSV",values)
//       const row = {};
//       for (let j = 0; j < headers.length; j++) {
//         row[headers[j]] = values[j];
//       }
//       data.push(row);
//     }
//     data.pop();

//     console.log("this is the data",data)
//     const valid = validataCsvData(data);
//     console.log("this is valid csv file or not", valid)
//     if(!valid){
//         setError("Please upload a relevant file")
//     }
//     else{
//       setCsvData(data);
//       setMapDataFromCSV(data);
//       const price = data.length * 100
//       setTotalPrice(price)
//       setDataFromCSVFile(true);

//     }

//   };

//   useEffect(() => {
//     console.log("this is the csvData in the useEffevt",csvData)
//     if(csvData.length > 0){
//         csvData.map((mapId,index) => {
//            return console.log("this is the row value",mapId, "this is the index", index)
//             })
//         }
    
//   },[csvData])

  // Function to toggle the checkbox state
  const handleCheckboxChange = (id) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    setSelectedOption('checkbox'); // Set selected option to 'checkbox' when a checkbox is checked
    setIsDataEntered(true); 
  };

//   // Function to calculate the total price
//   const calculateTotalPrice = () => {
//     return labels.reduce((totalPrice, { id, price }) => {
//       if (checkedState[id]) {
//         totalPrice += parseInt(price);
//       }
//       return totalPrice;
//     }, 0);
//   };

//   const totalMapsSelected = () => {
//     return labels.reduce((totalSelectedMaps, { id, qty }) => {
//       if (checkedState[id]) {
//         totalSelectedMaps += parseInt(qty);
//       }
//       return totalSelectedMaps;
//     }, 0);
//   };

//   function removeUncheckedValues(inputValues, checkedState) {
//     for (const key in checkedState) {
//       if (!checkedState[key]) {
//         delete inputValues[key];
//       }
//     }
//   }

//   const handleConfirmButton = () => {
//     console.log("this is the confirm button working");
//     console.log("Selected input values:", inputValues); // Log the selected input values
//     console.log("this is the checked state", checkedState);
//     //    const selectedMaps = filterCheckedValues(inputValues, checkedState)
//     if(!mapError && selectedOption){
//       removeUncheckedValues(inputValues, checkedState);
//       setSelectedMaps(inputValues);
//       console.log(inputValues);
//       // Generate CSV content
//       if(selectedOption !== 'file'){
//       const csvContent = generateCSVContent();
//       console.log("this is the csv content", csvContent);
//       setShowMapModal(false);
//       setCsvFile(csvContent);
//       }
//       else{
//         setShowMapModal(false)
//       }
//       // Create a Blob with the CSV content
//       //   const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

//       //   // Create a link to download the CSV file
//       //   const link = document.createElement("a");
//       //   link.href = window.URL.createObjectURL(blob);
//       //   link.download = "selected_data.csv";
//       //   link.style.display = "none";

//       //   // Append the link to the body and trigger the click event
//       //   document.body.appendChild(link);
//       //   link.click();

//       //   // Clean up by removing the link
//       //   document.body.removeChild(link);
//     }
//   };

//   // Function to handle input changes
//   const handleInputChange = (id, value) => {
//     setInputValues((prevInputValues) => ({
//       ...prevInputValues,
//       [id]: {
//         ...prevInputValues[id], // Preserve existing properties
//         hex: value,
//       },
//     }));
//   };

//   const handleRowInputChange = (id, value) => {
//     setInputValues((prevInputValues) => ({
//       ...prevInputValues,
//       [id]: {
//         ...prevInputValues[id], // Preserve existing properties
//         row: value,
//       },
//     }));
//   };

//   const handleColumnInputChange = (id, value) => {
//     setInputValues((prevInputValues) => ({
//       ...prevInputValues,
//       [id]: {
//         ...prevInputValues[id], // Preserve existing properties
//         column: value,
//       },
//     }));
//   };

//   const handleDataTypeChange = (id, value) => {
//     setInputValues((prevInputValues) => ({
//         ...prevInputValues,
//         [id]: {
//           ...prevInputValues[id], // Preserve existing properties
//           dataType: value,
//         },
//       }));
//   }

//   const generateCSVContent = () => {
//     const headers =
//       "IdName;Columns;Rows;Fieldvalues.StartAddr;DataOrg;AxisX.DataAddr;AxisX.DataOrg;AxisY.DataAddr;AxisY.DataOrg\n";

//     const csvRows = Object.entries(inputValues).map(([id, inputData]) => {
//       const hexValue = inputData.hex || "";
//       const rowValue = inputData.row || "";
//       const columnValue = inputData.column || "";
//       const dataTypeValue = inputData.dataType || "";
//       return `${id};${columnValue};${rowValue};"${hexValue}";"${dataTypeValue}";"0";"${dataTypeValue}";"0";"${dataTypeValue}"\n`;
//     });

//     return headers + csvRows.join("");
//   };

//   // Update the total price whenever the checkedState changes
//   useEffect(() => {
//     const total = calculateTotalPrice();
//     const mapsSelected = totalMapsSelected();
//     setTotalSelectedMaps(mapsSelected);
//     setTotalPrice(total);
//     console.log(
//       "this is the total price",
//       total,
//       "--> this is the total map selected",
//       mapsSelected
//     );
//   }, [checkedState]);

  return (
    <>
      {/* <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button> */}
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 rounded-lg text-base w-4 h-4 ml-auto inline-flex justify-center items-center "
              data-modal-hide="authentication-modal"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-2 lg:px-8">
              <h4 className=" text-xl font-medium text-gray-900 dark:text-white">
                Select Maps
              </h4>
    
              <div>
                <input
                  type="file"
                  accept=".csv"
               //   onChange={handleFileUpload}
                  className="border rounded"
                  id="fileInput"
                  disabled={selectedOption === 'checkbox'}
                />
                <span className="ml-2">(Upload CSV)</span>
                {error && <div style={{
                    color: "red"
                }} className="text-xs">{error}</div>}
              </div>

              <div className="flex justify-between">
                <div></div>
                <div className="text-selectButtonBgColor text-sm">
                  Selected: 1
                </div>
              </div>
            </div>
{          !showCSV && selectedOption !== 'file' && <div className="px-6 py-2 lg:px-8 h-96 overflow-x-hidden overflow-y-auto ">
              <div className="space-y-2" action="#">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                 onChange={handleSearchChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-4"
                />

                {labels.map(({ id, label }) => {
                  if (doesLabelMatchSearch(label)) {
                    return (
                      <CustomCheckbox
                        key={id}
                        id={id}
                        label={label}
                        checked={checkedState[id] || false}
                       onChange={() => handleCheckboxChange(id)}
                        placeholder={` Hexadecimal Input`}
                        // onInputChange={handleInputChange}
                        // onRowsInputChange={handleRowInputChange}
                        // onColumnsInputChange={handleColumnInputChange}
                        // onDataTypeInputChange={handleDataTypeChange}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </div>}

            <div className="px-6 py-3">
              <button
                type="button"
                className="w-full bg-submitButtonBgColor text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
             //   onClick={handleConfirmButton}
              >
                Confirm ( ${"total Credits"} )
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
