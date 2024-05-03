import React, { useEffect } from 'react';
import './index.css';
import numberWithCommas from '../../functions/CurrencyForamt';
import greenEye from '../../assets/images/greenEye.svg';
import lightEye from '../../assets/images/lightEye.svg';
import { useCryptoContext } from '../../context/CryptoContext';
import { useNavigate } from 'react-router-dom';

const TableRow = ({ crypto }) => {
    const { currency, setSymbol, symbol, setWatchlistItem, watchlistItem } = useCryptoContext();
    const navigate = useNavigate();

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

    function handleDetails(cryptoId, price, image) {
        navigate(`/cryptoview/${cryptoId}`);

        let watchlist = localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [];

        const wasExist = watchlist.find((crypto) => crypto.cryptoId === cryptoId);
        if (!wasExist) {
            watchlist.push({ cryptoId, price, image });
            localStorage.setItem("watchlist", JSON.stringify(watchlist));
            setWatchlistItem(watchlist);
        }
    }

    function GreenOrLight(id) {
        const watchlist = JSON.parse(localStorage.getItem("watchlist"));
        let watchlists = []
        if (watchlist && watchlist.length > 0) {
            watchlists = watchlist.length > 0 && watchlist.filter((crypto) => crypto.cryptoId === id);
        }

        return watchlists?.length > 0;
    }

    return (
        <tr className='bodyTr' onClick={() => handleDetails(crypto.id, numberWithCommas(crypto.current_price.toFixed(2)), crypto.image)}>
            <td className='bodyTd first'>
                <img src={crypto.image} alt="" />
                <div className="code-name">
                    <h3>{crypto.symbol}</h3>
                    <h4>{crypto.name}</h4>
                </div>
            </td>
            <td className='second'>
                <h3><span>{symbol}</span>{numberWithCommas(crypto.current_price.toFixed(2))}</h3>
            </td>
            <td className='third'>
                <img src={GreenOrLight(crypto.id) ? greenEye : lightEye} alt="" />
                <h4 style={{ color: crypto.price_change_percentage_24h > 0 ? "rgb(14, 203, 129)" : "rgb(255, 0, 0)" }}>
                    {crypto.price_change_percentage_24h > 0 ? '+' + crypto.price_change_percentage_24h.toFixed(2) : crypto.price_change_percentage_24h.toFixed(2)}%
                </h4>
            </td>
            <td className="fourth">
                <h3>{symbol}{numberWithCommas(crypto.market_cap.toString().length > 7 ? parseInt(crypto.market_cap.toString().slice(0, -6)) : crypto.market_cap)}M</h3>
            </td>
        </tr>
    );
};

export default TableRow;
