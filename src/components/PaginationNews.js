import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";

const PaginationNews = ({ page, handleChange, noOfPages }) => {
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
