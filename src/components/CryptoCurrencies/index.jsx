import React from 'react'
import CurrencyTable from '../CurrencyTable'
import './index.css'
import PaginationNav from '../Pagination'
import { useCryptoContext } from '../../context/CryptoContext'

function CryptoCurrencies() {
    const { setSearchCrypto } = useCryptoContext()

    function handleChange(e) {
        setSearchCrypto(e.target.value)
    }
    return (
        <main>
            <div className="container">
                <div className='currency-wrapper'>
                    <h2>Cryptocurrency Prices by Market Cap</h2>
                    <input onChange={(e) => handleChange(e)} type="text" placeholder='Search For a Crypto Currency..' />
                    <CurrencyTable></CurrencyTable>
                    <PaginationNav></PaginationNav>
                </div>
            </div>
        </main>
    )
}

export default CryptoCurrencies