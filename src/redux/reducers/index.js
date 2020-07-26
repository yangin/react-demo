import {combineReducers} from 'redux';
import counterReducer from './countReducer';
import weatherReducer from './weatherReducer';

const rootReducer=combineReducers({
  counter:counterReducer,
  weather:weatherReducer
  }
)

export default rootReducer;