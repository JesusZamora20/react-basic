import logo from './logo.svg';
import './App.css';
import Componente from './components/componente';
import Properties from './components/properties';
import State from './components/state';


function App() {
  let miNombre = "Jesus";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Name</label>
        <input type="text" id="nombre" placeholder='Your name here..'></input>
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

          <Properties
          string = "This is a String"
          number = {21}
          boolean = {true}
          array = {[1,2,3]}
          object={{
            name: 'Jesus',
            lastName: 'Bermudez',
            email: 'jbermudezamora87@gmail.com',
            edad: 21,
          }}
          func = {num => num * num}
          reactElement = {<i>This is a React Element</i>}
          reactComponent = {<Componente
            msg = 'i`m a component sent by via props'/>}
          />
          <hr/>
          <State/>
        </section>
      </header>
    </div>
  );
}

export default App;
