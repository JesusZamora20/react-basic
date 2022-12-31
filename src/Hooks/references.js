import React, { createRef, useRef } from 'react';

function References(){
    //using class
    // let refMenu = createRef();
    let refMenu = useRef();
    //using hooks
    let refMenuBtn = useRef();

    const handleToggleMenu = (e) => {
        if(refMenuBtn.current.textContent === "Menu"){
            refMenuBtn.current.textContent = 'Cerrar';
            refMenu.current.style.display = 'block';

        } else{
            refMenuBtn.current.textContent = 'Menu';
            refMenu.current.style.display = 'none';
        }
    }
    return(
        <>
            <h3>References</h3>
            <button id='menu-btn' ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
            <nav id='menu' ref={refMenu}>
                <a href='#'>Seccion 1</a>
                <br/>
                <a href='#'>Seccion 1</a>
                <br/>
                <a href='#'>Seccion 1</a>
                <br/>
                <a href='#'>Seccion 1</a>
                <br/>
                <a href='#'>Seccion 1</a>
            </nav>
        </>
    );
}

export default References;