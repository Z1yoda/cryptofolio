import React, { useState, useEffect } from 'react';
import './index.css';
import WatchlistItem from '../WatchlistItem';

export default function WatchList() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && event.target.innerHTML !== 'watchlist') {
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };

    }, [isOpen]);

    return (
        <>
            <button className='watchlistBtn' onClick={() => setIsOpen(!isOpen)}>watchlist</button>

            <div style={{ width: isOpen ? "511px" : "0" }} className='watchlist-wrapper'>
                <h1>Watch List</h1>
                <div className="items-wrapper">
                    <WatchlistItem />
                </div>
            </div>
        </>
    );
}
