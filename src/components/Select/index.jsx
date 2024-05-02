import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useCryptoContext } from '../../context/CryptoContext';

export default function SelectCompo() {
    const { currency, setCurrency, setSymbol } = useCryptoContext();

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    useEffect(() => {
        switch (currency) {
            case 'USD':
                setSymbol('$');
                break;
            case 'EUR':
                setSymbol('€');
                break;
            default:
                setSymbol('₽');
                break;
        }
    }, [currency, setSymbol]);

    return (
        <Box sx={{ minWidth: 80 }}>
            <FormControl fullWidth sx={{}}>
                <Select
                    id="demo-simple-select"
                    value={currency}
                    onChange={handleChange}
                    sx={{
                        color: '#fff',
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                            border: 0
                        },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                            border: 0, height: 40
                        },
                        "& .MuiSelect-icon": {
                            fill: '#fff',
                        },
                    }}
                >
                    <MenuItem value='USD'>USD</MenuItem>
                    <MenuItem value='EUR'>EUR</MenuItem>
                    <MenuItem value='RUB'>RUB</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
