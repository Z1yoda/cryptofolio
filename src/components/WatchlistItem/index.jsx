import React, { useEffect, useState } from 'react';
import './index.css';
import { useCryptoContext } from '../../context/CryptoContext';

function WatchlistItem() {
    const [watched, setWatched] = useState()
    const { watchlistItem, setWatchlistItem, symbol } = useCryptoContext();

    useEffect(() => {
        const watchlist = JSON.parse(localStorage.getItem("watchlist"));
        setWatched(watchlist)
    }, [watchlistItem])

    function handleRemove(id) {
        const watchlist = JSON.parse(localStorage.getItem("watchlist"));
        const watchlists = watchlist.filter((crypto) => crypto.cryptoId !== id);
        setWatchlistItem(watchlists);
        localStorage.setItem("watchlist", JSON.stringify(watchlists));
    }

    return (
        watched && watched.map((crypto) => (
            <div key={crypto.cryptoId} className='item-wrapper'>
                <img src={crypto.image} alt="crypto image" />
                <h4>{symbol} {crypto.price}</h4>
                <button onClick={() => handleRemove(crypto.cryptoId)}>remove</button>
            </div>
        ))
    );
}

export default WatchlistItem;
