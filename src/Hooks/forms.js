import React, { useState } from 'react';

function Forms(){
    const [name, setName] = useState('');
    const [flavor, setFlavor] = useState('');
    const [language, setLanguage] = useState('');
    const [terms, setTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('The form has been sent')
    }

    return(
        <>
            <h3>Forms</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nombre'>Nombre:</label>
                <input
                type='text' 
                id='nombre' 
                name='nombre' 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
                <br />

                <p>Choose your favorite JavaScript Flavor</p>
                <input 
                type='radio'
                id='vanilla'
                name='flavor'
                value='vanilla'
                onChange={(e)=> setFlavor(e.target.value)}
                defaultChecked/>
                <label htmlFor='vanilla'>Vanilla</label>
                <br />
                <input 
                type='radio'
                id='react'
                name='flavor'
                value='react'
                onChange={(e)=> setFlavor(e.target.value)}/>
                <label htmlFor='react'>React</label>
                <br />
                <input 
                type='radio'
                id='angular'
                name='flavor'
                value='angular'
                onChange={(e)=> setFlavor(e.target.value)}/>
                <label htmlFor='angular'>angular</label>
                <br />
                <input 
                type='radio'
                id='vue'
                name='flavor'
                value='vue'
                onChange={(e)=> setFlavor(e.target.value)}/>
                <label htmlFor='vue'>vue</label>
                <br />
                <input 
                type='radio'
                id='svelte'
                name='flavor'
                value='svelte'
                onChange={(e)=> setFlavor(e.target.value)}/>
                <label htmlFor='svelte'>svelte</label>

                <p>Choose your favorite programming language</p>
                <select name='language' onChange={(e) => setLanguage(e.target.value)} defaultValue='js'>
                    <option value=''>---</option>
                    <option value='js'>JavaScript</option>
                    <option value='php'>PHP</option>
                    <option value='py'>Python</option>
                    <option value='go'>Go</option>
                    <option value='rb'>Ruby</option>
                    <option value='ja'>Java</option>
                </select>
                <br/>
                <label htmlFor='terminos'>Accept terms and conditions</label>
                <input 
                type='checkbox' 
                id='terminos' 
                name='terminos'
                onChange={(e) => setTerms(e.target.checked)}/>
                <br/>
                <input type='submit'/>
            </form>
        </>
    );
}

export default Forms;
