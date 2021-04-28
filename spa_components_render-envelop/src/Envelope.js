import React from 'react'
import {sender, receiver, stamp, stampInner } from './css/style.css'

function Envelope({sender, receiver}) {
    return (
        <>
        <div className='main'>
            <div className = 'receiver'>
                <p>{ receiver.fullName }</p>
                <p>{ receiver.address }</p> 
                <p>{ receiver.cityStateZip }</p>
            </div>
            <div className = 'sender'>
                <p>{ sender.fullName }</p>
                <p>{ sender.address }</p> 
                <p>{ sender.cityStateZip }</p>
            </div>
            <div className='stamp'>
                <div className='stampInner'> STAMP</div>
            </div>
        </div>
        </>
    )
}

export default Envelope;


