import React,{Component} from 'react';
import { Upload, message, Button } from 'antd';
import axios from 'axios';
import qs from 'qs';

class Echarts extends Component{

  render(){
    return(
    <div>
      Echarts
      <div>
        <Button onClick={()=>{this.loadData()}}></Button>
      </div>
    </div>
    );
  }

  loadData(){
    let url='http://api.maitang.com/web/get_all_user_list';
    axios.get(url).then((res)=>{
      console.log('axios-->');
      console.log(res);
    }).catch((err)=>{
      console.log('err-->');
      console.log(err);
    });
  }

}

export default Echarts;