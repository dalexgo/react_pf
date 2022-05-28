import "./App.css";
import React, { useState } from "react";
import RenderInputs from "./components/RenderInputs";

function App() {

  const [state, setState] = useState({
    monto: 0,
    tna: 0,
    plazo: 0,
  });

  const [btnActive, setBtnActive] = useState(0);
  const [interes, setInteres] = useState(0);

  //fun get TNA
  const getTNAnum = (tna) => {
    return tna / 100;
  };

  //make a function that will return the interest
  const getInterest = () => {

    //getInt();

    let int = state.monto * ((getTNAnum(state.tna) * state.plazo) / 365);
    setInteres(int.toFixed(2));
  };

  const doClean = () => {
    setState({
      monto: 0,
      tna: 0,
      plazo: 30,
    });
    setBtnActive("30");
    setInteres(0);
  };

  // make function to render button wuth number
  const RenderButton = (props) => {
    let classBtn = "btn btn-sm";
    //set de button for de plaz active or desactive
    if (btnActive === props.plaz) {
      classBtn += " active";
    }

    return (
      <button
        className={classBtn}
        onClick={() => {
          setState((prevState) => {
            return { ...prevState, ...{ plazo: props.plaz } };
          });
          setBtnActive(props.plaz);
        }}
      >
        {props.plaz} días
      </button>
    );
  };


  //
  /*
  
  function that use the API from https://api.estadisticasbcra.com/plazo_fijo
  to get value of interes de plazo fijo 
  */
/*   const getInt = async () => {

    //const headerToken = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQxNTQzMTEsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJkLmFsZXhhbmRlci5nb21lekBnbWFpbC5jb20ifQ.3L-qbXjPlnuo8DWydGAqWbzY3i-cXn6mNGZaZTz2kMAH-jB7CciZvoIJ5haR8jKm0DoW_ymsOXkKByIdFfem7g';

    const url = "https://api.estadisticasbcra.com/plazo_fijo";
    
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Authorization": "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQxNTQzMTEsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJkLmFsZXhhbmRlci5nb21lekBnbWFpbC5jb20ifQ.3L-qbXjPlnuo8DWydGAqWbzY3i-cXn6mNGZaZTz2kMAH-jB7CciZvoIJ5haR8jKm0DoW_ymsOXkKByIdFfem7g",
          //"origin": "https://www.estadisticasbcra.com",
        },
        data : { d: "2022-05-15"}
      });
      const data = await response.json();

      console.log(data.interes);

    } catch (error) {
      console.log(error);
    }

    
  }; */



  return (
    <div className="App">
      <header className="App-header">
        <div className="containerPrincipal">

        <div>
            <RenderInputs statePasedFun={setState} statePased={state} />

            <div className="divCuadro">
              <div className="flexDivRow">  
                <RenderButton plaz="30" />
                <RenderButton plaz="60" />
                <RenderButton plaz="90" />
              </div>

              <div className="flexDivRow">
                <img src="obtener-rentas.83f187ed.svg" alt="" />
              </div>
            </div>

            <div className="container">
              <div className="flexDivColumn">
                <div className="col-12">
                  <div className="flexDivColumn">
                    <button className="btn" onClick={() => getInterest()}>Obtener Interés</button>
                    <button className="btn" onClick={() => doClean()}>Limpiar</button>
                  </div>
                </div>
              </div>
            </div>  


 
        </div>


          <div>
              <div className="container">
                <div className="flexDivColumn">
                  <div className="col-12">
                    <div className="flexDivColumn">
                      
                      <div className="col-2"></div>
                
                      <span className="label">Al final del plazo recibís</span>
                      
                      <div className="">
                       <span> {interes} </span> 
                      </div>
                
                    </div>
                  </div>
                </div>
              </div> 
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
