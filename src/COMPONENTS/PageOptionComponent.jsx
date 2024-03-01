import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../CSS/page.css"

const PageOptionComponent = ({handlePageChange}) => {
  return (
    <div className="container">
      <Stack spacing={2}>
        <Pagination count={5} variant="outlined" color="secondary" onChange={handlePageChange} />
      </Stack>
    </div>
  );
};
export default PageOptionComponent;
