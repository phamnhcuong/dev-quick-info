import request from "../Utils/request";
import "./Styles/QuickInfo.css"
import React, { useState,useEffect } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookF,faInstagram,faTiktok,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons' 

function QuickInfo(){

    const [userName,setUserName] = useState("")
    const [userDescribe,SetUserDescribe] = useState("")
    const [dataInfo,setDataInfo] = useState([])
    const [userUserAvatar,setUserAvatar] = useState()

    useEffect(() =>{
        request.get('quick-info/'+ localStorage.getItem('sessionUserCode'))
            .then((res) => {
                setUserName(res.data[0].userName)
                SetUserDescribe(res.data[0].userDescribe)
                setDataInfo(res.data)
                setUserAvatar(res.data[0].userAvatar)    
            }).catch((er) =>{console.log(er)})
    },[])
    
   const renderSwitch = (param) => {
        switch(param) {
            case 'faFacebookF':
                return <FontAwesomeIcon className='Logos-Social-item' icon={faFacebookF} />;
            case 'faInstagram':
                return <FontAwesomeIcon className='Logos-Social-item' icon={faInstagram} />;
            case 'faTiktok':
                return <FontAwesomeIcon className='Logos-Social-item' icon={faTiktok} />;
            case 'faTwitter':
                return <FontAwesomeIcon className='Logos-Social-item' icon={faTwitter} />;
            case 'faYoutube':
                return <FontAwesomeIcon className='Logos-Social-item' icon={faYoutube} />;
        }
      }
    const DisplayListItem =  (props) => {
        return(
            <div className="btn-list-social">
                <a href={props.infoLink} target="_blank">
                    {renderSwitch(props.socialKey)}
                    {props.socialName}
                </a>
            </div>
        ) 
    }
    return(
        <main className="main-content">
            <div className='header-content'>
                <img src={`data:image/jpeg;base64,${userUserAvatar}`} alt="Avatar" class="avatar"></img>
                    <h1>{userDescribe} : {userName}</h1>
                </div>
            <div className="home-content">
                <div className="container-Social">
                    {dataInfo.map((info) => <DisplayListItem key={info.infoId} infoId= {info.infoId} infoLink={info.infoLink} socialName={info.socialName} socialKey={info.socialKey}/>)}
                </div>
            </div>
        </main>
    )
}

export default QuickInfo;