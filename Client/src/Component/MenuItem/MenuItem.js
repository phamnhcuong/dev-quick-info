import React ,{useState} from "react";
import IconContext from "../Context/IconContext";
function MenuItem({ handleCallback,menuItem}) {
  const [isActive, setIsActive] = useState(false);
  const handleCheckSocial = () =>{
    setIsActive(current => !current);
    handleCallback(menuItem);
  }

  return (
    <div className={isActive ? "menuItemCheck" : "menuItem"}  onClick={() => handleCheckSocial()}>
      <div className="item"> 
        {IconContext(menuItem.socialKey)}
      </div>
      <h1> {menuItem.socialName} </h1>
      <p> chọn </p>
    </div>
  );
}

export default MenuItem;
