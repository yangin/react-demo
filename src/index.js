import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './configs/router.config'
import './index.css';

import store from './redux/store';
import { Provider } from "react-redux";


// import {counte} from './redux/actions/counterAction';


const App=()=>{
  return(<div>
    <Provider store={store}>
      <Routes/>
    </Provider>
  </div>)
}

ReactDOM.render(<App />,document.getElementById('root'));
