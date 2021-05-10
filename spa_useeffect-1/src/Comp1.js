import React, { useState, useEffect } from 'react'

function Comp1() {

    const[data, setData] = useState([]);

    const myFunc = () => {
        fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
                .then(response => response.json())
                .then(data => {
                    setData(data);
                })
    }

    useEffect(() => {
        myFunc();
        setInterval(() => {
            myFunc();
        }, 3000);
    }, []);

    return (
        <div>
            <p>{ data }</p>
        </div>
    )
}

export default Comp1;
