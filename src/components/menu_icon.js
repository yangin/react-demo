import React, { Component } from 'react';
import {HomeOutlined, BarChartOutlined,EditOutlined,SettingOutlined} from '@ant-design/icons';

class MenuIcon extends Component{

  render(){
    const {icon} =this.props;

    switch(icon){
      case 'desk$/index':return <HomeOutlined />;
      case 'desk$/echarts':return <BarChartOutlined />;
      case 'desk$/editor':return <EditOutlined />;
      case 'set$':return <SettingOutlined />;
      default:return null;
    }
  }

}

export default MenuIcon;





