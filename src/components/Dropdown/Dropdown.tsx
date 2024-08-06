import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown = ({
  onChange,
  variantSizes,
}: {
  onChange: any;
  variantSizes: any;
}) => {
  const [size, setSize] = React.useState(null);
  //   let sortedVariantSize;
  if (variantSizes[0].filterCode.includes("R")) {
    variantSizes.sort((a: any, b: any) => {
      // Extract numeric part
      const numA = parseInt(a.filterCode.slice(0, -1), 10);
      const numB = parseInt(b.filterCode.slice(0, -1), 10);
      return numA - numB;
    });
  } else {
    // Define the order
    const sizeOrder = {
      XS: 1,
      S: 2,
      M: 3,
      L: 4,
      XL: 5,
      XXL: 6,
      "3XL": 7,
    };

    // Sort function
    variantSizes.sort((a: any, b: any) => {
      return (sizeOrder[a.filterCode] || 0) - (sizeOrder[b.filterCode] || 0);
    });
  }

  const handleChange = (event: any) => {
    console.log(event.target.value);
    setSize(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} required>
        <InputLabel id="demo-simple-select-helper-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={size}
          label="Size"
          onChange={handleChange}
        >
          {variantSizes.map((variant: any) => {
            return (
              <MenuItem value={variant.filterCode}>
                {variant.filterCode}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>Select your size</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Dropdown;
