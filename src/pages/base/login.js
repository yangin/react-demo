import React, { Component } from 'react';
import { Spin, Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import { defPage } from '../../configs/config'
import { regExpConfig } from '../../configs/regular.config';
import '../../styles/login.less';
import md5 from 'md5';
import axios from 'axios';
import * as data from '../../mocks/apis/base';
import qs from 'qs';
import { connect } from "react-redux";
import ReactLoading from 'react-loading';
// import store from '../../redux/store';
import {loadWeatherAction} from '../../redux/actions/weatherAction';


const FormItem = Form.Item;

class Login extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
      username: 'yangjin',
      password: '123456',
    }
    
    // console.log('login-->');
    // console.log(this.props);
  }

  componentDidMount() {

  }

  // #region 处理登录事件
  handleSubmit(query) {
    let userinfo = query;
    this.setState({ loading: true })
    // userinfo.password = md5(values.password)
    if (userinfo.username === 'yangjin' && userinfo.password === '123456') {
      //获取menu数据,并存入缓存
      const nav = data.menu.data.list || []
      sessionStorage.setItem('gMenuList', JSON.stringify(nav))
      sessionStorage.setItem('topMenuReskey', nav[0].resKey)
      sessionStorage.setItem('leftNav', JSON.stringify(nav))
      //获取staff数据,并存入缓存
      const staff = data.staff.data | {};
      sessionStorage.setItem('userinfo', JSON.stringify(staff))

      this.props.history.push({ pathname: defPage, params: userinfo });
    }else{
      message.error('用户信息错误，请重新登录');
    }

    this.setState({ loading: false });
  }
  // #endregion
  
  //#region redux dispatch
  // handleSubmit(query) {
  //   this.props.dispatch(loadWeatherAction);
  //   setTimeout(()=>{
  //     console.log('5S后-->');
  //     console.log(this.props);
  //   },3000);
  // }
  //#endregion

  //#region axios
    // handleSubmit() {
    // console.log('点击了登录按钮');

    //#region axios.get
    // let url='http://api.maitang.com/web/get_all_user_list';
    // axios.get(url).then((res)=>{
    //   console.log('axios-->');
    //   console.log(res);
    // }).catch((err)=>{
    //   console.log('err-->');
    //   console.log(err);
    // });
    //#endregion

    //#region axios.post
    // let url='http://api.maitang.com/web/get_someone_by_page';
    // let params={page_size:3,page_index:1};
    // axios.post(url,qs.stringify(params)).then((res)=>{
    //   console.log('axios-->');
    //   console.log(res);
    // }).catch((err)=>{
    //   console.log('err-->');
    //   console.log(err);
    // })
    //#endregion

    //#region axios.post params is object
    // let url = 'http://api.maitang.com/web/get_someone_by_page';
    // let params = { page_size: 3, page_index: 1 };
    // axios.post(url, qs.stringify(params)).then((res) => {
    //   console.log('axios-->');
    //   console.log(res);
    // }).catch((err) => {
    //   console.log('err-->');
    //   console.log(err);
    // })
    //#endregion

    //#region axios.all
    // const getSomeUser=()=>{
    //   let url='http://api.maitang.com/web/get_someone_by_page?page_size=3&page_index=1';
    //   return axios.get(url);
    // }

    // const getUser=()=>{
    //   let url='http://api.maitang.com/web/get_all_user_list';
    //   return axios.get(url);
    // }
    // axios.all([getSomeUser(),getUser()]).then(axios.spread((acct,perms)=>{
    //   console.log('all');
    //   console.log(acct);
    //   console.log(perms);
    // }))
    //#endregion
    // }
    //#endregion

  render() {
    const { username, password } = this.state;
    console.log('render-->');
    console.log(username, password);

    return (
      <div className="login-container">
        <div className="login-main">
          <Spin spinning={this.state.loading}>
            <Form
              onFinish={e => this.handleSubmit(e)}
              initialValues={{
                ['username']: username,
                ['password']: password,
              }}
            >
              <FormItem
                hasFeedback
                name="username"
                rules={[
                  {
                    required: true, min: 4, max: 10, message: '用户名为4-10个字符',
                  },
                  { pattern: regExpConfig.policeNo, message: '账号4-10位数字或字母组成' },
                ]}>
                <Input addonBefore={<UserOutlined />} placeholder="请输入用户名" type="text" />
              </FormItem>
              <FormItem
                hasFeedback
                name="password"
                rules={[{
                  required: true, min: 6, max: 16, message: '密码为6-16个字符',
                },
                { pattern: regExpConfig.pwd, message: '密码由6-16位数字或者字母组成' },]}
              >
                <Input addonBefore={<LockOutlined />} placeholder="请输入密码" type="password" />
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="cert-btn">登录</Button>
              </FormItem>
            </Form>
          </Spin>
        </div>
        <ReactLoading height={'20%'} width={'20%'} />
      </div>
    );
  }
}

//#region redux connect
// redux 将store中的状态绑定包当前组件，供调用
// const mapStateToProps=(state,ownProps)=>{
//   return {
//     weather:state.weather
//   }
// }
// export default connect(mapStateToProps)(withRouter(Login));
//#endregion

export default withRouter(Login);