import React, { useState } from 'react';

const Form = () => {
  const [lbs, setLbs] = useState('');

  const handleInputChange = e => {
    setLbs({
      gram: e.target.value / (1.2046).toFixed(),
      kg: e.target.value / (2.2046).toFixed(),
      ons: e.target.value * 16
    });
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <input
            type="number"
            className="form-control form-control-lg mb-5"
            placeholder="submit weight..."
            onChange={handleInputChange}
          />
        </div>
      </form>
      <div className="output">
        <div className="card card-primary mb-2">
          <div className="card-block">
            <h4>Gram: {lbs.gram}</h4>
          </div>
        </div>

        <div className="card card-success mb-2">
          <div className="card-block">
            <h4>Kg: {lbs.kg}</h4>
          </div>
        </div>

        <div className="card card-danger mb-2">
          <div className="card-block">
            <h4>Ons: {lbs.ons}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
