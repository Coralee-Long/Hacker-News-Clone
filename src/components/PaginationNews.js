import { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';

const PaginationNews = () => {
    const [page, setPage] = useState(1)

    const handleChange = (event, value) => {
        setPage(value)
    }

    return (
        <div>
            <Pagination count={10} page={page} variant='outlined' color='primary' onChange={handleChange} />
        </div>
    )
}

export default PaginationNews;