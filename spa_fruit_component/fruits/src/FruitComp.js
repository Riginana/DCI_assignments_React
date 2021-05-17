import React, { useState } from 'react';

function FruitComp(props) {
    const [color, setColor] = useState('red');
    const [display, setDisplay] = useState('block');
    const colors = ['red', 'green', 'yellow', 'orange'];

    function changeColor(){
        const randomCol = Math.floor(Math.random()*4);
        setColor(colors[randomCol])
    }
    
    function deleteEl(){
        setDisplay('none');
    }
    return (
        <div>
            <div style={{display: `${display}`}}>
            <div style={{color: `${color}`}}>{props.name}, color={color}
            <button onClick={ changeColor } >Change Color</button>
            <button onClick={ deleteEl }>Delete Me</button>
            </div>
            </div>
        </div>
    )
}

export default FruitComp;
