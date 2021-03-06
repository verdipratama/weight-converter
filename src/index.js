import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import Title from './components/Title';
import Form from './components/Form';

import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Title />
          <Form />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
