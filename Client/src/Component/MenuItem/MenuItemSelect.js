import React ,{useState} from "react";
import IconContext from "../Context/IconContext";
function MenuItemSelect({handleCallbackSubmit, menuItem}) {
  const [data,setData] = useState([])

  const handleCheckSocial = () =>{
    console.log(data)
    handleCallbackSubmit(data)
  }
  const handleChange = (e) =>{
    setData({
      "userCode" : localStorage.getItem("sessionUserCode"),
      "socialId" : menuItem.socialId,
      "infoLink" : e.target.value,
      "socialName" : null
    })
  }
  return (
    <div className="menuItem" onClick={() => handleCheckSocial()}>
      <div className="item"> 
        {IconContext(menuItem.socialKey)}
        <h1> {menuItem.socialName} </h1>
      </div>
        <p>Copy link liên kết :</p>
        <input type="text" onChange={handleChange}/>
    </div>
  );
}

export default MenuItemSelect;
