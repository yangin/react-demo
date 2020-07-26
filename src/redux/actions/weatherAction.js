// import { createAction } from 'redux-actions'
// export const requestLogin = createAction('request login')
// export const recevieLogin = createAction('receive login')
// export const login = createAjaxAction(common.login, requestLogin, recevieLogin)

import {loadWeather} from '../services';

 export const loadWeatherAction=async (dispatch)=>{
  const res=await loadWeather();
  dispatch({
    type:'LOAD_WEATHER',
    payload:res.data
  });
}