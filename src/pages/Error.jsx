import React from 'react'
import errorPage from '../assets/images/errorPage.svg'

const ErrorPage = () => {
    return (
        <div className='error-wrapper'>
            <div className='content'>
                <h1>Oops, Failed to Fetch</h1>
                <p>Please turn off VPN, and on again.</p>
            </div>
            <img className='errorPage' src={errorPage} alt="" />
        </div>
    )
}

export default ErrorPage