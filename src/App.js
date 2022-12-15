import logo from './logo.svg';
import './App.css';
import Componente from './components/componente';
import Properties from './components/properties';
import State from './components/state';
import ConditionalRendering from './components/conditionalRendering';
import ElementRender from './components/elementRender';
import {EventsES6} from "./components/EventsES6";
import { EventsES7 } from './components/EventsES7';
import { Events2 } from './components/Events2';
import Father from './components/compComunication';
import ComponentLifeCycle from './components/componentLifeCycle';
import AjaxApis from './components/Ajax';
import CounterHooks from './Hooks/counter';


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
          <hr/>
          <ConditionalRendering />
          <hr/>
          <ElementRender />
          <hr/>
          <EventsES6/>
          <hr/>
          <EventsES7/>
          <hr/>
          <Events2/>
          <hr/>
          <Father/>
          <hr/>
          <ComponentLifeCycle />
          <hr />
          <AjaxApis />
          <hr/>
          <h3>Working with Hooks</h3>
          <CounterHooks />
        </section>
      </header>
    </div>
  );
}

export default App;
