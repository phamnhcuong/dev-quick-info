import "./Styles/Register.css"
import React, {useState } from "react";
import request from "../Utils/request";
import {Navigate } from 'react-router-dom';  
export default function Register() {

  const [success, setSuccess] = useState(0);

  const [dataInfo,setDataInfo] = useState({
    "userEmail" : '',
    "userPassword": '',
  })

  const handleChange = (e) =>{
    setDataInfo({
      ...dataInfo,
      [e.target.name]: e.target.value
    })
  }
  
  const submitRegister = () =>{ 
      request.post('user/loginUser',dataInfo).then(res =>{
        if(res.status === 200){
          localStorage.setItem('sessionUserCode', res.data.userCode)
          localStorage.setItem('sessionUserId', res.data.userId)
          setSuccess(res.data)
        }
      }).catch( er =>{console.log(er) })
  };

  const FormButton = props => (
    <div id="button" class="row">
      <button onClick={submitRegister} >{props.title}</button>
    </div>
  );
  
  if(success !== 0){
    return <Navigate to="/quick-info" />
  }else{
    return(
      <div id="loginform">
        <FormHeader title="Đăng nhập Quick-Info" />
        <div>
        <div class="row">
            <label>Email</label>
            <input name="userEmail" value={dataInfo.userEmail} placeholder="Nhập email" type="text" onChange={handleChange}/>
        </div>  
        <div class="row">
            <label>Mật khẩu</label>
            <input name="userPassword" value={dataInfo.userPassword} placeholder="Mật Khẩu" type="password" onChange={handleChange}/>
        </div>  
       <FormButton title="Đăng nhập" />
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