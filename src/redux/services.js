import axios from 'axios';
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

export const loadWeather=()=>{
  let url='http://api.k780.com/?app=weather.future&weaid=1&&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json';
  return  axios.get(url);
}