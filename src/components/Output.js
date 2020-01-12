import React from 'react';

const Output = hasil => {
  return (
    <div className="output">
      <div className="card card-primary mb-2">
        <div className="card-block">
          <h4>Gram: {hasil.lbs.gram}</h4>
        </div>
      </div>

      <div className="card card-success mb-2">
        <div className="card-block">
          <h4>Kg: {hasil.lbs.kg}</h4>
        </div>
      </div>

      <div className="card card-danger mb-2">
        <div className="card-block">
          <h4>Ons: {hasil.lbs.ons}</h4>
        </div>
      </div>
    </div>
  );
};

export default Output;
