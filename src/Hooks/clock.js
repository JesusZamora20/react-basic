import React, { useEffect, useState } from 'react';

function Reloj({hour}){
    return <h3>{hour}</h3>;
}

function Clock(){
    let [hour, setHour] = useState(new Date().toLocaleTimeString());
    let [visible, setVisible] = useState(false);

    useEffect(()=>{
        let timer;

        if(visible){
            timer = setInterval(()=>{
                setHour(new Date().toLocaleTimeString());
            },1000);
        } else {
            clearInterval(timer);
        }

        return() =>{
            console.log('dismounting phase');
            clearInterval(timer);
        }
    },[visible])

    return(
        <>
            <h3>CLock With useEffect Hook</h3>
            {visible && <Reloj hour ={hour} />}
            <div>
                <button onClick={() => setVisible(true)}>Start</button>
                <button onClick={() => setVisible(false)}>Stop</button>
            </div>
        </>
    );
}

export default Clock;