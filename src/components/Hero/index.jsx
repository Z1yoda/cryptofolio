import React, { useEffect } from 'react';
import './index.css';
import useFetch from '../../hooks/useFetch';
import { useCryptoContext } from '../../context/CryptoContext';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';
import numberWithCommas from '../../functions/CurrencyForamt';
import { FadeLoader } from 'react-spinners';

function Hero() {
    const { currency, setSymbol, symbol, isLoading } = useCryptoContext();
    const navigate = useNavigate()
    const { data } = useFetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);

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

    const responsive = {
        0: {
            items: 2,
        },
        1024: {
            items: 4,
        }
    };

    function handleDetails(cryptoId) {
        navigate(`/cryptoview/${cryptoId}`)
    }

    const items = data && data.map((crypto) => (
        <div key={crypto.id} onClick={() => handleDetails(crypto.id)} className="carousel-item">
            <img src={crypto.image} alt="" />
            <div className='crypto-code'>
                <h3>{crypto.symbol}</h3>
                <h4>{crypto.price_change_percentage_24h.toFixed(2)}%</h4>
            </div>
            <div className="crypto-value">
                <h2><span>{symbol}</span>{numberWithCommas(crypto.current_price.toFixed(2))}</h2>
            </div>
        </div>
    ));

    return (
        <div className="hero-wrapper">
            <div className="container">
                <div className="crypto-title">
                    <h1 className='cryptoh1'>CRYPTOFOLIO WATCH LIST</h1>
                    <p>Get all the Info regarding your favorite Crypto Currency</p>
                </div>
                {isLoading && <FadeLoader className='loader' color='#87CEEB' />}
                {data && (
                    <div className="carousel-track">
                        <div className="carousel">
                            <AliceCarousel
                                mouseTracking
                                infinite
                                autoPlayInterval={1000}
                                animationDuration={1500}
                                disableDotsControls
                                responsive={responsive}
                                autoPlay
                                items={items}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Hero;
