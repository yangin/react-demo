import React, { Component } from 'react';
import {Drawer, Button, } from 'antd';
import '../../../../styles/header_modal.less';

class UserInfo extends Component {
  constructor(props, context) {
    super(props)
    // this.state = {
    //   drawerVisible:true,
    // }
  }

  componentDidMount() {
    console.log('渲染样式')
    console.log()
  }

  render() {
    const {onCancel}=this.props;
    console.log('渲染userinfo');
    console.log(this.props);
    return (
<Drawer
      title="用户信息"
      placement="right"
      closable={false}
      onClose={onCancel}
      visible={true}>
      <div className="user">
        <div className="user-img">
          <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </div>
        <div className="user-info">
          <ul>
            <li>
              <span>姓名</span>
              <span>杨锦</span>
            </li>
            <li>
              <span>部门</span>
              <span>技术部</span>
            </li>
            <li>
              <span>职位</span>
              <span>技术经理</span>
            </li>
            <li>
              <span>工号</span>
              <span>20200624</span>
            </li>
            <li>
              <span>手机</span>
              <span>15055154122</span>
            </li>
            <li>
              <span>邮箱</span>
              <span>422918408@qq.com</span>
            </li>
            <li>
              <span>角色</span>
              <span>超级管理员</span>
            </li>
            <li>
              <span>安全</span>
              <a href="#">修改密码</a>
            </li>
          </ul>
        </div>
        <div className="drawer-footer">
          <Button onClick={onCancel}>退出</Button>
        </div>
      </div>
    </Drawer>
      
    );
  }


 // -------------------------------事件---------------------------------
  // onDrawerClose(){
  //   this.setState({drawerVisible:false});
  // }

 // -------------------------------方法---------------------------------

}


export default UserInfo;