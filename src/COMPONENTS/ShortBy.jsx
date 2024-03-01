import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import "../CSS/shortBy.css";

const ShortBy = ({ selectShotBy, shortBy }) => {
  return (
    <div className="sort-container">
      <Box sx={{ minWidth: 30 }}>
        <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            ShortBy
          </InputLabel>
          <NativeSelect value={shortBy} onChange={selectShotBy}>
            <option value={"publishedAt"}>Latest</option>
            <option value={"relevancy"}>Relevant</option>
            <option value={"popularity"}>Popular</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </div>
  );
};
export default ShortBy;
