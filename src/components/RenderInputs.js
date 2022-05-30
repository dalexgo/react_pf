import React, { useEffect } from "react";

const RenderInputs = (props) => {
  const handleChange = (e) => {
    props.statePasedFun((prevState) => {
      return { ...prevState, ...{ [e.target.name]: e.target.value } };
    });
  };

  useEffect(() => {}, []);

  return (
      <div className="container">
        <div className="flexDivColumn">
          <div className="col-12">
            <div className="flexDivColumn">
             
              <div className="col-12">
                <span className="label boldFont">Monto</span>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="number"
                  className="form-input inputUnderline "
                  name="monto"
                  value={props.statePased.monto}
                />
              </div>
              <div className="col-12">
                <span className="label boldFont">TNA</span>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="number"
                  className="form-input inputUnderline "
                  name="tna"
                  value={props.statePased.tna}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RenderInputs;
