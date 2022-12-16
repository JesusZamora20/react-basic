import { cleanup } from '@testing-library/react';
import React, { useEffect, useInsertionEffect, useState } from 'react';

function Scroll(){
    const [scrollY, setScrollY] = useState(0);

    useEffect(()=>{
        console.log('scrolling');

        const detectarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll",detectarScroll);

        return ()=>{
            window.removeEventListener("scroll",detectarScroll);
            console.log('unMounting');
        };
    },[scrollY]);

    //se ejecuta solo en fase montaje si dejamos
    // el segundo parametro en un array vacio
    useEffect(()=>{
        console.log('mounting phase');
    },[]);

    //al no tener un segundo parametro, este se ejecutara cada 
    //vez que el componente se actualice
    useEffect(()=>{
        console.log('updating');
    });

    //cuando tiene una funcion se ejecuta la fase de desmontaje
    useEffect(()=>{
        return () =>{console.log('unMounting');};
    });


    return(
        <>
            <h3>Hook useEffect</h3>
            <p>Scroll Y del navegador {scrollY} px </p>
        </>
    );
}

export default Scroll;