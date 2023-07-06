import "./Styles/Register.css"
import React, { useState } from "react";
import request from "../Utils/request";
import img_avatar from "../Contant/img/avatar.png"
import {Navigate } from 'react-router-dom';  

export default function Register() {
  let formData = new FormData()
  const [success, setSuccess] = useState(false);

  const [dataInfo,setDataInfo] = useState({
    "userCode" : '',
    "userName" : '',
    "userEmail" : '',
    "userPassword": '',
    "userPhone" : '',
    "userDescribe" : ''
  })
  const onChangePicture = e => {
    formData.append("userAvatar",e.target.files[0])
};

  const handleChange = (e) =>{
    setDataInfo({
      ...dataInfo,
      [e.target.name]: e.target.value
    })
  }
  

  const submitRegister = () =>{ 
    formData.append("json",JSON.stringify(dataInfo))
    
    console.log(formData)
      request.post('user/registerQuickInfo',formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(res =>{
        setSuccess(true)
      }).catch(er =>{
        console.log(er)
      })
  };

  const FormButton = props => (
    <div id="button" class="row">
      <button onClick={submitRegister}>{props.title}</button>
    </div>
  );
  if(success){
    return <Navigate to="/quick-info" />
  }else{
    return(
      <div id="loginform">
        <FormHeader title="Đăng Ký Quick-Info" />
        <div>
        <div class="row">
            <label>Quick ID</label>
            <input name="userCode" value={dataInfo.userCode} type="text" placeholder="Đặt Quick ID của bạn" onChange={handleChange}/>
        </div> 
        <div class="row">
            <label>Tên hiển thị</label>
            <input name="userName" value={dataInfo.userName} type="text" placeholder="Tên hiển thị" onChange={handleChange}/>
        </div> 
        <div class="row">
            <label>Email</label>
            <input name="userEmail" value={dataInfo.userEmail} placeholder="email" type="text" onChange={handleChange}/>
        </div>  
        <div class="row">
            <label>Số điện thoại</label>
            <input name="userPhone" value={dataInfo.userPhone} placeholder="Số điện thoại đăng nhập" type="tel"onChange={handleChange}/>
        </div>  
        <div class="row">
            <label>Mật khẩu</label>
            <input name="userPassword" value={dataInfo.userPassword} placeholder="Mật Khẩu" type="password" onChange={handleChange}/>
        </div>  
        <div class="row">
            <label>Tiểu sử</label>
            <input name="userDescribe" value={dataInfo.userDescribe} placeholder="Thông tin tiểu sử" type="text" onChange={handleChange}/>
        </div>  
        <div>
        <label for="images" class="drop-container">
            Avatar
            <input name="userAvatar" type="file" onChange={e => onChangePicture(e)} accept="image/png, image/jpeg , image/jpeg" multiple="multiple"/>
            <img src={img_avatar} alt="Avatar" class="avatar"/>
            </label>
        </div>
        
       <FormButton title="Đăng ký"/>
     </div>
        <OtherMethods />
      </div>
    )
  }
    
}
const FormHeader = props => (
      <h2 id="headerTitle">{props.title}</h2>
  );
  
  
  const OtherMethods = props => (
    <div id="alternativeLogin">
      <label>Đăng nhập với :</label>
      <div id="iconGroup">
        <Facebook />
        <Twitter />
        <Google />
      </div>
    </div>
  );
  
  const Facebook = props => (
    <a href="#" id="facebookIcon"></a>
  );
  
  const Twitter = props => (
    <a href="#" id="twitterIcon"></a>
  );
  
  const Google = props => (
    <a href="#" id="googleIcon"></a>
  );