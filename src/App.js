import './App.css';
import React, { useState } from "react";

function App() {

  const [monto, setMonto] = useState(0);
  const [tna, setTNA] = useState(0);
  const [plazo, setPlazo] = useState(0);

  const [btnActive, setBtnActive] = useState(0);

  //const [active, setActive] = useState(types[0]);

  const [interes, setInteres] = useState(0);

  //fun get TNA
  const getTNAnum = (tna) => {
    return tna/100;
  }

  //make a function that will return the interest
  const getInterest = () => {
    let int = monto * ((getTNAnum(tna) * plazo) / 365) ;
    setInteres(int);
  }

  // make function to render button wuth number
  const RenderButton = (props) => {
    let classBtn = "btn btn-sm";
      //set de button for de plaz active or desactive
      if (btnActive === props.plaz) {
        classBtn += " active";
      }

    return (<button className = {classBtn} onClick={() => {
      setPlazo (props.plaz);setBtnActive(props.plaz);
    }}>{props.plaz} días</button>);
  }
  

  return (
    <div className="App">
      <header className="App-header">

        <div className='divCuadro'>

            <div className='flexDivColumn'>
          
            <div>
            <label >
              Monto:
              <input onChange={ (e)=> setMonto(e.target.value) } type="Monto" name="monto" defaultValue="0"/>
            </label>
              </div>

            <div className=''>
            <label >
              TNA:
              </label>
              <input onChange={ (e)=> setTNA(e.target.value) } type="tna" name="tna" defaultValue="0"/>
        

        
            </div>

            <div>
            <label>
              Plazo:
              <input onChange={ (e)=> setPlazo(e.target.value) } type="plazo" name="plazo" value={plazo} readOnly disabled/>
            </label>
            </div>

          </div>

        <div>
          <button onClick={ () => getInterest() } >
            Obtener Interés
          </button>
          <button >
            Limpiar
          </button>
        </div>

        <div>
          <input type="text" value={interes} readOnly />
        </div>
       
       </div>

       <div className='divCuadro'>

         <div className='flexDivRow'> 

          <RenderButton plaz = '30' />

          <RenderButton plaz = '60' />

          <RenderButton plaz = '90' />

         </div>

          <div className='flexDivRow'> 
              <img src="obtener-rentas.83f187ed.svg" alt=""/>


            </div>

       </div>
      
        </header>
    </div>
  );
}

export default App;
