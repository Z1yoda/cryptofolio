import React, { useEffect, useState } from 'react';
import './index.css';
import useFetch from '../../hooks/useFetch';
import { useCryptoContext } from '../../context/CryptoContext';
import TableRow from '../TableRow';


function CurrencyTable() {
    const { currency, currentPage, searchCrypto } = useCryptoContext();
    const [searched, setSearched] = useState("")
    const { data, isLoading, error } = useFetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=24h`);

    useEffect(() => {
        if (data && Array.isArray(data)) {
            const searchedCrypto = data.find((crypto) => crypto.name.toLowerCase() === searchCrypto);
            if (searchedCrypto) {
                setSearched(searchedCrypto);
            }
        }
    }, [data, searchCrypto]);


    return (
        <div className="container">
            <table className='table-wrapper'>
                <thead>
                    <tr className='headTr'>
                        <th className='first'>Coin</th>
                        <th className='second'>Price</th>
                        <th className='third'>24h Change</th>
                        <th className='fourth'>Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((crypto) => (
                        <TableRow key={crypto.id} crypto={crypto} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CurrencyTable;
