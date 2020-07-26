// import { handleActions } from 'redux-actions'
// import axios from 'axios';

// // 登陆返回结果
// const loginState = () => ({})
// export const loginResponse = handleActions({
//   'request login'(state, action) {
//     return { ...state, loading: true }
//   },
//   'receive login'(state, action) {
//     // eslint-disable-next-line no-unused-vars
//     const { req, res } = action.payload
//     return { data: res, loading: false }
//   },
// }, loginState())



// export const async loadWeather=()=>{
  
//   let url='http://api.k780.com/?app=weather.future&weaid=1&&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json';
//   return  axios.get(url).then((res)=>{
//     console.log('axios-->');
//     console.log(res);
//   }).catch((err)=>{
//     console.log('err-->');
//     console.log(err);
//   });

// }

const weatherReducer=(state={list:[{title:'您好'}]},action)=>{
  switch(action.type){
    case 'LOAD_WEATHER':return {
      ...state,list:action.payload
    }
    default:return state
  }
}

export default weatherReducer;