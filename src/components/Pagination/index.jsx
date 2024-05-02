import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { useCryptoContext } from '../../context/CryptoContext';

function PaginationNav() {
    const { currentPage, setCurrentPage } = useCryptoContext();

    const theme = createTheme({
        palette: {
            primary: {
                main: '#87CEEB',
                back: '#ffffff28'
            },
        },
    });

    const handlePageChange = (e, page) => {
        setCurrentPage(page);
    };

    return (
        <div className='pagination-wrapper'>
            <ThemeProvider theme={theme}>
                <Stack spacing={2}>
                    <Pagination
                        count={10}
                        onChange={handlePageChange}
                        sx={{
                            '& .MuiPaginationItem-root': {
                                color: theme.palette.primary.main,
                                backgroundColor: 'transparent',
                            },
                            '& .MuiPaginationItem-root.Mui-selected': {
                                color: theme.palette.primary.main,
                                backgroundColor: theme.palette.primary.back,
                            },
                        }}
                    />
                </Stack>
            </ThemeProvider>
        </div>
    );
}

export default PaginationNav;
