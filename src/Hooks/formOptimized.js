import React, {useState} from 'react';

function FormOptimized(){
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value,
        })
    }

    const handleChecked = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.checked,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('The form has been sent')
    }


    return(
        <>
            <h3>Forms Optimized</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nombre'>Nombre:</label>
                <input
                type='text' 
                id='nombre' 
                name='nombre' 
                value={form.name} 
                onChange={handleChange}/>
                <br />

                <p>Choose your favorite JavaScript Flavor</p>
                <input 
                type='radio'
                id='vanilla'
                name='flavor'
                value='vanilla'
                onChange={handleChange}
                defaultChecked/>
                <label htmlFor='vanilla'>Vanilla</label>
                <br />
                <input 
                type='radio'
                id='react'
                name='flavor'
                value='react'
                onChange={handleChange}/>
                <label htmlFor='react'>React</label>
                <br />
                <input 
                type='radio'
                id='angular'
                name='flavor'
                value='angular'
                onChange={handleChange}/>
                <label htmlFor='angular'>angular</label>
                <br />
                <input 
                type='radio'
                id='vue'
                name='flavor'
                value='vue'
                onChange={handleChange}/>
                <label htmlFor='vue'>vue</label>
                <br />
                <input 
                type='radio'
                id='svelte'
                name='flavor'
                value='svelte'
                onChange={handleChange}/>
                <label htmlFor='svelte'>svelte</label>

                <p>Choose your favorite programming language</p>
                <select name='language' onChange={handleChange} defaultValue='js'>
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
                onChange={handleChecked}/>
                <br/>
                <input type='submit'/>
            </form>
        </>
    );
}

export default FormOptimized;