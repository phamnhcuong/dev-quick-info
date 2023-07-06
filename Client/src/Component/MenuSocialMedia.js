import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem/MenuItem";
import MenuItemSelect from "./MenuItem/MenuItemSelect";
import "./Styles/Menu.css";
import request from "../Utils/request";

function MenuSocialMedia() {
    const [dataAllSocial,setDataAllSocial] = useState([])
    const [dataSelectedSocial,setDataSelectedSocial] = useState([])
    const [dataSubmit, setDataSubmit] = useState([])
    const [isContinue,setIsContinue] = useState(true)
    useEffect(()=>{
      request.get('socialMedia/getSocialMedia')
            .then((res) => {
              setDataAllSocial(res.data)
            }).catch((er) =>{console.log(er)})
    },[])

    const handleCallback = (data) =>{
      setDataSelectedSocial(current =>{
        const isChecked = dataSelectedSocial.includes(data)
        if(isChecked){
            return dataSelectedSocial.filter(item => item !== data)
        }else{
          return [...current,data]
        }
      })
    }
    const handleCallbackSubmit = (data) =>{
      console.log(data)
      setDataSubmit(...dataSubmit,data)
    }
    const handleContinue = () =>{
      setIsContinue(!isContinue)
    }
    const handleSubmit = () => {
      request.post('quick-info/addUserSocialMedia',dataSubmit).then(res =>{
        
      }).catch(er =>{
        console.log(er)
      })
    }

  return (
    <div className="menu">
      <h1 className="menuTitle">Tạo link bio</h1>
      {
        isContinue ? <button onClick={handleContinue}> Tiếp tục</button>
        : <button onClick={handleSubmit}> Thêm mới</button>

      }
      <div className="menuList">
        {isContinue ? 
          dataAllSocial.map((menuItem, key) => {
            return (
              <MenuItem
                handleCallback={handleCallback}
                key={key}
                menuItem={menuItem}
              />
            );
          })
          :
          dataSelectedSocial.map((menuItem, key) => {
            return (
                <MenuItemSelect
                  handleCallbackSubmit={handleCallbackSubmit}
                  key={key}
                  menuItem={menuItem}
                />
            );
          })
        }
        
      </div>
    </div>
  );
}

export default MenuSocialMedia;
