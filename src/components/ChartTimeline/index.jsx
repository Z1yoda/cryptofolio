import React, { useState } from 'react'
import './index.css'
import { useCryptoContext } from '../../context/CryptoContext'

function ChartTimeline() {
    const { setDays } = useCryptoContext()
    const [isClicked, setIsClicked] = useState(1)

    function handleClick(e) {
        if (e.target.textContent === '24 Hours') {
            setDays(1)
            setIsClicked('1')
        } else if (e.target.textContent === '30 Days') {
            setDays(30)
            setIsClicked('30')
        } else if (e.target.textContent === '3 Months') {
            setDays(90)
            setIsClicked('90')
        } else {
            setDays(365)
            setIsClicked('365')
        }


    }

    return (
        <div className='buttons'>
            <button onClick={(e) => handleClick(e)} className={isClicked === '1' ? 'clickedBtn' : "button"}>
                24 Hours
            </button>
            <button onClick={(e) => handleClick(e)} className={isClicked === '30' ? 'clickedBtn' : "button"}>
                30 Days
            </button>
            <button onClick={(e) => handleClick(e)} className={isClicked === '90' ? 'clickedBtn' : "button"}>
                3 Months
            </button>
            <button onClick={(e) => handleClick(e)} className={isClicked === '365' ? 'clickedBtn' : "button"}>
                1 Year
            </button>

        </div>
    )
}

export default ChartTimeline