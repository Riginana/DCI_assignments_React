import React from 'react'
import "./style.css"

function CreditCard({cardInfo}) {
    return (
        <div className='Card'>
            <div className='bankName'><h1>{ cardInfo.bankName }</h1></div>     
            <div className='data'> 
                <div className='cardNum'><p>{ cardInfo.creditCardNum }</p></div>  
                <div className='expirationData'>
                    <p> Valid </p> 
                    <p> THRU </p>
            </div>
            <div className='expData'><p>{ cardInfo.expirationData }</p></div>
            <p>{ cardInfo.userName }</p>  
            </div>           
        </div>
    )
}

export default CreditCard;
