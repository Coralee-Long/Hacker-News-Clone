import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";

const PaginationNews = ({ page, handleChange, noOfPages }) => {
  // const [page, setPage] = useState(1)

  // const handleChange = (event, value) => {
  //     setPage(value)
  // }

  return (
    <div>
      <p>TEST{noOfPages}</p>
      <Pagination
        count={noOfPages}
        page={page}
        variant="outlined"
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
};

export default PaginationNews;
