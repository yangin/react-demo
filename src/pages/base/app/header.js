import React, { Component } from 'react';
import {Breadcrumb, Modal, message, Row, Col, Avatar, Badge,  Tag,} from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined,BellOutlined,SkinOutlined } from '@ant-design/icons';
import UserInfo from './modal/user_info';
import SkinSet from './modal/skin_set';
import Tips from './modal/tips';

import { brandName } from '../../../configs/config';


const { confirm } = Modal;

class Header extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      loading: false,

      showUserInfo: false,                        // 控制用户信息弹框显隐'
      showSkinSet: false,                          // 控制皮肤设置弹出
      showTips: false,                             // 控制提示消息弹出

      editPasswordMadalIsOpen: false,

    }
  }

  componentDidMount() {
    console.log('渲染样式')
  }


  render() {
    console.log('header渲染');
    console.log(this.props);

    const { breadcrumb, tags, onBreadcrumb, onClickTag, onCloseTag, onClickMenu } = this.props
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo')) || {}
    const roles = []

    let name = ''
    let { showTips,showChangePwd, showSkinSet,showUserInfo } = this.state;

    userinfo && userinfo.roles && userinfo.roles.map((item) => {
      roles.push(item.roleName)
    })


    if (sessionStorage.getItem('userinfo')) {
      name = JSON.parse(sessionStorage.getItem('userinfo')).chineseName
    }

    return (
      <header id="header">
        <div id="header-container" className="boxed">
          <Row className="row">
            <Col span={12} className="col-left">
              <a href="#" onClick={() => { onClickMenu() }}>
                {this.props.menuStyle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </a>
              <Breadcrumb>
                <Breadcrumb.Item><a onClick={() => { onBreadcrumb() }}>首页</a></Breadcrumb.Item>
                {breadcrumb.map((name) => <Breadcrumb.Item>{name}</Breadcrumb.Item>)}
              </Breadcrumb>
            </Col>
            <Col span={12} className="col">
              <div className="right">
                <a href="#" onClick={() => { this.onShowTips() }}>
                  <Badge count={5}>
                  <BellOutlined />
                  </Badge>
                </a>
              </div>
              <div className="right">
                <a href="#" onClick={() => { this.onShowSkinSet() }}>
                <SkinOutlined />
                </a>
              </div>
              <a href="#" onClick={() => { this.onShowUserInfo() }}>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="small" />
              </a>
            </Col>
          </Row>
        </div>
        {/* 标签页 */}
        <div id="header-tag">
          {tags.map((tag, index) => {
            return (
              <span className={tag.checked ? 'tag-checked' : ''}>
                <Tag closable={index === 0 ? false : true} onClose={(e) => { this.onCloseTag(e, tag) }} onClick={() => { onClickTag(tag) }}>{tag.pathName}</Tag>
              </span>
            )
          }
          )}
        </div>
        {showTips ? <Tips onCancel={() => { this.onCancelTips() }} /> : null}
        {showSkinSet ? <SkinSet onCancel={() => { this.onCancelSkinSet() }} /> : null}
        {showUserInfo ? <UserInfo onCancel={() => { this.onCancelUserInfo() }} /> : null}
      </header>
    )
  }

  // -------------------------------事件---------------------------------
  //1.关闭标签事件
  onCloseTag(e, tag) {
    //取消默认事件
    e.preventDefault();
    //阻止react合成事件间的事件冒泡
    e.stopPropagation();
    this.props.onCloseTag(tag);
  }

  //2.显示消息
  onShowTips() {
    this.setState({ showTips: true })
  }

  onCancelTips() {
    this.setState({ showTips: false })
  }

  //3.皮肤设置
  onShowSkinSet() {
    this.setState({ showSkinSet: true })
  }

  onCancelSkinSet() {
    this.setState({ showSkinSet: false })
  }

  //4.用户信息
  onShowUserInfo() {
    this.setState({ showUserInfo: true })
  }

  onCancelUserInfo() {
    this.setState({ showUserInfo: false })
  }


  // -------------------------------方法---------------------------------

}

export default Header;