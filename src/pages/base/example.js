import React, { Component } from 'react';
import { Upload, message, Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import '../../styles/example.less';
import axios from 'axios';
import qs from 'qs';

// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }

// function beforeUpload(file) {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!');
//   }
//   return isJpgOrPng && isLt2M;
// }


class Example extends Component {

  uploadImg(){

  }

  showImg(){
    console.log('showImg-->');
    console.log(this);
    let myfile=this.refs.myfile;
    let files=myfile.files;
    let file=files[0];
    let formData=new FormData();
    formData.append("file",file);


    console.log(myfile);
    console.log(files);
    console.log(file);
    console.log(formData);


    axios({
      method:'post',
      url:'http://api.maitang.com/web/uploadImage',
      data:formData,
      headers:{
        'Content-Type':'multipart/form-data'
      }
    }).then((res)=>{
      console.log('res-->');
      console.log(res);
    }).catch((err)=>{
      console.log('err-->');
      console.log(err);
    })

  }

  


  render() {
    return (
      <div>
        <div class="img-container">
          <input type="file" ref="myfile" />
        </div>
        <div>
          <Button onClick={()=>{this.showImg()}}>显示照片</Button>
        </div>
        <div>
          <Button onClick={()=>{this.uploadImg()}}>上传照片</Button>
        </div>
      </div>
    )

  }






  // state = {
  //   loading: false,
  // };

  // handleChange = info => {
  //   if (info.file.status === 'uploading') {
  //     this.setState({ loading: true });
  //     return;
  //   }
  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, imageUrl =>
  //       this.setState({
  //         imageUrl,
  //         loading: false,
  //       }),
  //     );
  //   }
  // };

  // render() {
  //   const uploadButton = (
  //     <div>
  //       {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
  //       <div className="ant-upload-text">Upload</div>
  //     </div>
  //   );
  //   const { imageUrl } = this.state;
  //   return (
  //     <Upload
  //       name="avatar"
  //       listType="picture-card"
  //       className="avatar-uploader"
  //       showUploadList={false}
  //       // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
  //       action="http://api.maitang.com/web/uploadImage"
  //       beforeUpload={beforeUpload}
  //       onChange={this.handleChange}
  //     >
  //       {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
  //     </Upload>
  //   );
  // }
}

export default Example;


