import React, { useEffect, useState } from 'react';
import CryptoDetails from '../components/CryptoDetails';
import CryptoChart from '../components/CryptoChart';
import { FadeLoader } from 'react-spinners';

function CryptoView() {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000);
    }, []);

    return (
        <div>
            {loader ? (
                <FadeLoader className='loaderInfo' color='rgb(135, 206, 235)' />
            ) : (
                <div style={{ display: "flex" }}>
                    <CryptoDetails />
                    <CryptoChart />
                </div>
            )}
        </div>
    );
}

export default CryptoView;
