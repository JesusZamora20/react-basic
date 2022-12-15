import React, { useState } from 'react';

function CounterHooks(){
    //primero se desestructura useState
    const [counter, setCounter] = useState(0);

    const increase = () =>{
        setCounter(counter+1)
    }

    const decrease = () =>{
        setCounter(counter-1)
    }

    return(
        <>
            <h4>useState</h4>
            <h3>{counter}</h3>
            <nav>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </nav>
        </>
    );
}

export default CounterHooks;