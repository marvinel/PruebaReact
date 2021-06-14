import React, {  useContext } from 'react';
//import Slider from "../slider/Slider";
import Form from '../form/Form';
//import './styles/styles.css'
import { AppContext } from '../../provider/Provider';
function Content(props) {

  const [state, setState] = useContext(AppContext);

  return (


      <div className="App-asd">
        <p className="h1home">Hola, bienvenido, sabemos que quieres viajar en un <strong>{state.item}</strong> , por favor diligencia el siguiente formulario:</p>

        <Form />

      </div>


  );
}

export default Content;
