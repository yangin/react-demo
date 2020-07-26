import React, { Component } from 'react';
import { Menu, Spin } from 'antd'
import { HomeOutlined, } from '@ant-design/icons';
import MenuIcon from '../../../components/menu_icon';


import { brandName } from '../../../configs/config';




const { SubMenu } = Menu;

class LeftNav extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      openKeys: [],                                                   //当前展开的 SubMenu 菜单项 key 数组
      rootSubmenuKeys: [],                                            //根目录的Keys数组
      menu: JSON.parse(sessionStorage.getItem('gMenuList')) || [],    //菜单的model数据源
    }
  }

  componentDidMount() {
    console.log('leftNav页面');
    console.log(this.props);
  }

  // 二级菜单的生成
  renderLeftNav = (options) => {
    const { menu } = this.state
    return menu.map((item, index) => {
      if (!item.children || item.children.length === 0) {
        return (
          <Menu.Item key={item.resKey ? item.resKey : item.id} name={item.resName} style={{ paddingLeft: 0 }}>
            <MenuIcon icon={item.resKey} />
            <span className="menu-name">{item.resName}</span>
          </Menu.Item>
        )
      }
      const key = `sub${index}`
      return (
        <SubMenu key={key}
          title={
            <span>
              <MenuIcon icon={item.resKey} />
              <span className="menu-name">{item.resName}</span>
            </span>
          }
        >
          {
            item.children.map((child, _index) =>
              (
                <Menu.Item key={child.resKey ? child.resKey : child.id} name={child.resName}>
                  <i className={`qqbicon`} title={child.resName} />
                  <span className="menu-name">{child.resName}</span>
                </Menu.Item>
              ))
          }
        </SubMenu>
      )
    })
  }

  render() {
    const { openKeys } = this.state
    const { menuStyle, selectedKeys } = this.props;

    return (
      <div className={menuStyle ? 'left-nav-mini' : ''}>
        <div id='brand-container'>
          <div className="navbar-brand" title={brandName}>
            <span className="brand-title">
              <span className="brand-text"><span className="logo" />{brandName}</span>
            </span>
          </div>
        </div>
        <nav id="mainnav-container" className="mainnav-container">
          <Spin spinning={false}>
            <Menu onClick={(e) => { this.handleClick(e) }}
              theme="dark"
              openKeys={openKeys}
              onOpenChange={(e) => { this.onOpenChange(e) }}
              selectedKeys={selectedKeys}
              mode="inline"
              inlineIndent="16"
              inlineCollapsed={menuStyle}
            >
              {this.renderLeftNav()}
            </Menu>
          </Spin>
        </nav>
      </div>
    )
  }

  // -------------------------------事件---------------------------------
  // 1.菜单点击事件
  handleClick(e) {
    this.props.onClickMenuItem(e.key);
  }

  //2.subMenu 展开/关闭 执行事件  
  onOpenChange(openKeys) {
    this.setState({ openKeys });
  }

}

export default LeftNav;