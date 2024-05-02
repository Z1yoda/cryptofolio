import React, { createContext, useState, useContext } from "react";

const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
    const [currency, setCurrency] = useState("USD");
    const [currentPage, setCurrentPage] = useState(1);
    const [symbol, setSymbol] = useState("$");
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [days, setDays] = useState(null);
    const [dataHistory, setDataHistory] = useState(false);
    const [searchCrypto, setSearchCrypto] = useState(false);
    const [watchlistItem, setWatchlistItem] = useState([])

    return (
        <CryptoContext.Provider
            value={{
                currency,
                setCurrency,
                currentPage,
                setCurrentPage,
                symbol,
                setSymbol,
                error,
                setError,
                isLoading,
                setIsLoading,
                days,
                setDays,
                dataHistory,
                setDataHistory,
                searchCrypto,
                setSearchCrypto,
                watchlistItem,
                setWatchlistItem
            }}
        >
            {children}
        </CryptoContext.Provider>
    );
};

export const useCryptoContext = () => useContext(CryptoContext);
