import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../CSS/option.css";

let categories = [
  "sports",
  "entertainment",
  "business",
  "technology",
  "health",
];

const OptionComponent = ({ changeCategoryOnClick }) => {
  return (
    <div className="category-contrainer">
      {categories.map((category, index) => {
        return (
            <Stack spacing={2} direction="row" key={index}>
              <Button
              className="category-button"
                variant="contained"
                
                onClick={() => changeCategoryOnClick(category)}
              >
                {category}
              </Button>
            </Stack>
        );
      })}
    </div>
  );
};

export default OptionComponent;
