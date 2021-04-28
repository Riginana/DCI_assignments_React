import React from 'react'
import Envelope from './Envelope'

export default function App() {
    const fromPerson = {
        fullName: 'Julian Perge',
        address: '123 Blank Street',
        cityStateZip: 'Columbus, OH 43203',
      };
      
      const toPerson = {
        fullName: 'Max Mustermann',
        address: '321 Kanzlerstraße Street',
        cityStateZip: 'San Francisco, CA 43204',
      }; 

    return (
        <div className='App'>
            <Envelope sender = {fromPerson} 
                    receiver = {toPerson}/>
        </div>
    )
}
