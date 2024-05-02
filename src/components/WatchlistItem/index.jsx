import React from 'react';
import './index.css';
import { useCryptoContext } from '../../context/CryptoContext';

function WatchlistItem() {
    const { watchlistItem, setWatchlistItem } = useCryptoContext();

    function handleRemove(id) {
        const watchlist = JSON.parse(localStorage.getItem("watchlist"));
        const watchlists = watchlist.filter((crypto) => crypto.cryptoId !== id);
        setWatchlistItem(watchlists);
        localStorage.setItem("watchlist", JSON.stringify(watchlists));
    }

    return (
        watchlistItem && watchlistItem.map((crypto) => (
            <div key={crypto.cryptoId} className='item-wrapper'>
                <img src={crypto.image} alt="crypto image" />
                <h4>₹ {crypto.price}</h4>
                <button onClick={() => handleRemove(crypto.cryptoId)}>remove</button>
            </div>
        ))
    );
}

export default WatchlistItem;
