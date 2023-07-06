import QRCode from "react-qr-code"
import {useState,useEffect} from "react"
import "./Styles/QRCode.css"

export default function QRCodePersonal(){

    const [isMobile, setIsMobile] = useState(false)
 
    //choose the screen size 
    const handleResize = () => {
      if (window.innerWidth < 720) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
    }
    
    // create an event listener
    useEffect(() => {
      window.addEventListener("resize", handleResize)
    })
    
    const copyLinkInfo = () => {
        console.log("COPIED")
    }

    console.log(isMobile)
    return(
        <div className={`${isMobile ? "Center-QR" : "Center-QR-Destop"}`}>
            <img src="https://images.kienthuc.net.vn/zoom/800/uploaded/dinhcuc/2022_03_15/chia-tay-thu-mon-noi-tieng-hai-gai-xinh-goi-cam-va-quyen-ru-kho-nhan-ra.jpg" alt="Avatar" class="avatar"></img>
            
            <h1>Quick Info</h1>
            <QRCode 
                value="facebook"
                className="main-QR"
            />
            
        </div>
    )
}