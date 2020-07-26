import React, { Component } from 'react';
import { Button, Drawer } from 'antd';
import '../../../../styles/theme.less'
import '../../../../styles/header_modal.less';
import less  from 'less';


class SkinSet extends Component {
  constructor(props, context) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    console.log('渲染样式')
    console.log()
  }

  render() {
    const { onCancel } = this.props;
    console.log('渲染userinfo');
    console.log(this.props);
    return (
      <Drawer
        title="皮肤设置"
        placement="right"
        closable={false}
        onClose={onCancel}
        visible={true}>
        <div className="skin">
          <div className="skin-theme">
            <div className="title">
              <span>主题颜色</span>
            </div>
            <ul>
              <li className="white" onClick={()=>{this.onChangeSkin()}}></li>
              <li className="blue"></li>
              <li className="red"></li>
              <li className="green"></li>
              <li className="orange"></li>
              <li className="purple"></li>
              <li className="dark"></li>
            </ul>
          </div>
          <div className="drawer-footer">
            <Button onClick={onCancel}>退出</Button>
          </div>
        </div>
      </Drawer>
    );
  }


onChangeSkin(){
  console.log('修改主题色2');
  less.modifyVars({
    "@nav-background":"#ff0000",
  })
}
}


export default SkinSet;