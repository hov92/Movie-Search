import React from 'react'
import { Pagination } from '@mui/material'
import Stack from '@mui/material/Stack';


const CustomPagination = ({setPage, numOfPages = 10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0)
    };


    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
        }}>
            <Stack spacing={2}>
                <Pagination count={numOfPages} 
                onChange={(e)=> handlePageChange(e.target.textContent)} 
                showFirstButton 
                showLastButton />
            </Stack>
        </div>
    )
}

export default CustomPagination
