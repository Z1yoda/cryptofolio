import React from 'react'
import './index.css'
import SelectCompo from '../Select'
import WatchList from '../WatchList'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header>
            <div className='container'>
                <div className="header">
                    <Link to={`/`}>CRYPTOFOLIO</Link>
                    <div className="select-button">
                        <SelectCompo></SelectCompo>
                        <WatchList></WatchList>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header