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
              <div className="col-2"></div>
              <div className="col-4">
                <span className="label">Monto</span>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="number"
                  className="form-input"
                  name="monto"
                  value={props.statePased.monto}
                />
              </div>
              <div className="col-4">
                <span className="label">TNA</span>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="number"
                  className="form-input"
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
