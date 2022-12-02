import logo from './logo.svg';
import './App.css';
import Componente from './components/componente';

function App() {
  let miNombre = "Jesus";
  let Marcas = ["Adidas", "Nike", "Balenciaga", "Tommy", "Prada"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Name</label>
        <input type="text" id="nombre" placeholder='Your name here..'></input>
        <ul>
          {Marcas.map((marca, index)=><li key={index}>{marca}</li>)}
        </ul>
        <p>
          Edit {miNombre} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <section>
          <Componente 
            msg="I'm a component"
          />
        </section>
      </header>
    </div>
  );
}

export default App;
