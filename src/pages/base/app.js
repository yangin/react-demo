import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { message,} from 'antd';
import Header from './app/header';
import LeftNav from './app/left_nav';
import { pages, defPage } from '../../configs/config';
import '../../styles/menu.less';

const defPageKey = defPage.substring(pages.length + 1);        //获取首页的pathKey

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuStyle: false,                                       // 左侧导航菜单是否mini模式
      leftNav: [],                                            // 左侧菜单列表（所有的系统菜单）
      gMenuList: [],                                          // 当前用户菜单列表（角色权限下的菜单）
      selectedKeys: [defPageKey],                             // 当前选中菜单栏
      breadcrumb: [],                                          // 导航面包屑内容['设置中心','用户管理']
      tags: [{ pathKey: defPageKey, pathName: "首页", checked: true }],  // 历史页标签
    }
  }

  componentDidMount() {
    console.log('App页面');
    console.log(this.props);

    this.setState({
      leftNav: JSON.parse(sessionStorage.getItem('leftNav')),
      gMenuList: JSON.parse(sessionStorage.getItem('gMenuList')),
    });
  }

  render() {
    const { location, children } = this.props;
    const { leftNav, menuStyle, selectedKeys, tags, breadcrumb } = this.state

    return (
      <div id="container">
        <LeftNav
          selectedKeys={selectedKeys}
          menuStyle={menuStyle}
          leftNav={leftNav}
          onClickMenuItem={(pathkey) => { this.onClickMenu(pathkey) }}
          location={location}
        />
        <div className={menuStyle ? 'boxed boxed-mini' : 'boxed'}>
          <Header
            onClickMenu={() => { this.onMenuStyle() }}
            menuStyle={menuStyle}
            breadcrumb={breadcrumb}
            onBreadcrumb={() => { this.onClickMenu(defPageKey) }}
            tags={tags}
            onClickTag={(e) => { this.onClickTag(e) }}
            onCloseTag={(tag) => { this.onCloseTag(tag) }}
          />
          <div id='content-container'>
            {children}
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------事件---------------------------------
  //1.关闭标签页事件
  onCloseTag(tag) {
    let { tags } = this.state;

    let idx = 0;
    tags.map((item, index) => {
      if (item.pathKey === tag.pathKey) {
        idx = index;
      }
    });

    if (tags[idx].checked) {
      const newPathKey = tags[idx - 1].pathKey;
      this.onClickMenu(newPathKey);
    }
    tags.splice(idx, 1);
    this.setState({ tags: tags, });
  }

  //2.点击标签页事件
  onClickTag(tag) {
    this.onClickMenu(tag.pathKey);
  }

  //3.点击菜单栏按钮
  onClickMenu(pathkey) {
    console.log('点击菜单按钮');
    console.log(pathkey);
    //更新标签栏
    let { tags } = this.state;
    let breadcrumb = [];

    let pathObj = this.getPathNameByKey(pathkey);

    //重置历史标签
    tags.map((tag, index) => {
      if (tag.checked) {
        tags[index].checked = false;
      }
    });

    //点亮标签
    if (tags.find(tag => tag.pathKey == pathkey)) {
      tags.map((item, index) => {
        if (item.pathKey == pathkey) {
          tags[index].checked = true;
        }
      });
    } else {
      tags.push({ pathKey: pathkey, pathName: pathObj[0].pathName, checked: true });
    }

    // 获取导航面包屑
    if(pathObj[0].pathKey!=defPageKey){
      pathObj.reverse().map((item) => {
        breadcrumb.push(item.pathName);
      });
    }

    //选中菜单高亮，并跳转到页面
    this.setState({
      selectedKeys: pathkey,
      tags: tags,
      breadcrumb: breadcrumb,
    }, () => {
      this.props.history.push(`/${pages}/${pathkey}`);
    });
  }

  //4.收起/展开左侧导航栏
  onMenuStyle() {
    this.setState({ menuStyle: !this.state.menuStyle });
  }


  // -------------------------------方法---------------------------------
  //1.通过pathKey获取pathName,返回格式[{pathKey:'set$/userManage',pathName:'用户管理'},{pathKey:'set$',pathName:'设置中心'}]
  getPathNameByKey(pathKey) {
    let res = [];

    const menus = this.state.gMenuList;

    // 定义一个标签语句
    // eslint-disable-next-line
    jumpOut1:
    for (let i = 0; i < menus.length; i++) {
      const item = menus[i]
      if (item.resKey && pathKey === item.resKey) {
        res.push({ pathKey: item.resKey, pathName: item.resName });
        // eslint-disable-next-line
        break jumpOut1
      } else if (item.children && item.children.length > 0) {
        // eslint-disable-next-line
        jumpOut2:
        for (let j = 0; j < item.children.length; j++) {
          const record = item.children[j]
          if (item.resKey && pathKey === record.resKey) {
            res.push({ pathKey: record.resKey, pathName: record.resName }, { pathKey: item.resKey, pathName: item.resName });
            // eslint-disable-next-line
            break jumpOut1
          }
        }
      }
    }
    return res;
  }
}

export default withRouter(App);