// import { Autocomplete, TextField } from "@mui/material";
// import { useEffect, useState } from "react";
// import { useGetRoomsQuery } from "../../Redux/api/api";

// const DropDown = ({valueUpdate,queryField,allTimeValue,dataof}) => {
//   const films = [
//     { label: "The Shawshank Redemption", year: 1994 },
//     { label: "The Godfather", year: 1972 },
//     { label: "The Godfather: Part II", year: 1974 },
//     { label: "The Dark Knight", year: 2008 },
//     { label: "12 Angry Men", year: 1957 },
//     { label: "Schindler's List", year: 1993 },
//     { label: "Pulp Fiction", year: 1994 },
//   ];
//   const [value, setValue] = useState(null);
//   const [inputValue, setInputValue] = useState("");


//   useEffect(() => {
//     if (allTimeValue === "") {
//       setValue(null);
//       setInputValue("");
//       return;
//     }
//     if (queryField) {
//       const currentObj = alldata?.find(
//         (item) => item[queryField] === allTimeValue
//       );
//       setValue(currentObj);
//       // setInputValue("sdfsdfsdf");
//     }
//   }, [allTimeValue]);


// const{data}=useGetRoomsQuery(null)

// const getData=()

//   return (
//     <div>
//       <Autocomplete
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//           valueUpdate(event, newValue);
//         }}
//         inputValue={inputValue}
//         onInputChange={(event, newInputValue) => {
//           setInputValue(newInputValue);
//         }}
//         sx={{
//           "& .MuiOutlinedInput-root": {
//             border: "2px solid black", // Targets the outer border of the Autocomplete
//             "&:hover fieldset": {
//               border: "none", // Hover effect
//             },
//             "&.Mui-focused fieldset": {
//               border: "none", // Focus effect
//             },
//           },
//         }}
//         disablePortal
//         options={films}
//         renderInput={(props) => <TextField {...props}></TextField>}
//       />
//     </div>
//   );
// };

// export default DropDown;
