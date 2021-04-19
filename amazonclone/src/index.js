import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

//higer order component
//it inject props into the child
ReactDOM.render(
  <React.StrictMode>
<StateProvider initialState={initialState} reducer={reducer}> 

<App />

</StateProvider>
    


  </React.StrictMode>,
  document.getElementById('root')
);


