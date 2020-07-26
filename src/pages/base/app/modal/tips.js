import React, { Component } from 'react';
import { Button, Drawer } from 'antd';
import '../../../../styles/header_modal.less';


class Tips extends Component {
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
        title="接收消息"
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
              <li className="white"></li>
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

}


export default Tips;