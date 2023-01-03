import React from 'react';
import './styles.css';
import moduleStyles from'./styles.module.css';
import './styles.scss';

function Styles(){
    let myStyles = {
        borderRadius: ".5rem",
        margin: "2rem"
    }
    return(
        <section className='styles'>
            <h3>Styles css in React</h3>
            <h4 className='bg-react'>Style in CSS external sheet</h4>
            <h4 className='bg-react' 
            style={{borderRadius:".25rem", margin:"1rem"}}>inLine Styles</h4>
            <h4 className='bg-react' style={myStyles}> inLine styles with variables</h4>
            <h4 className='bg-react'>
                styles with normalize
                <br/>
                <code>@import-normalize;</code>
            </h4>
            <h3 className={moduleStyles.error}>Styles with modules</h3>
            <h3 className={moduleStyles.success}>Styles with modules</h3>
            <h3 className="bg-sass">Styles with Sass</h3>
        </section>
    );
}

export default Styles;