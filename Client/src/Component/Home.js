import "./Styles/Home.css"
import { NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Banner1 from "./Banner/VideoBanner1"; 
function Home(){
    
    return(
        <div className="home" >
            <div className="headerContainer">
                <h1>Quick Bio Information </h1>
                <h3> Tạo Bio Link thông tin nhanh chóng<br/> tốt nhất dành cho bạn</h3>
                <p> <FontAwesomeIcon className='Logos-Social-item' icon={faCheckCircle} /> Đơn giản nhanh chóng</p>
                <p><FontAwesomeIcon className='Logos-Social-item' icon={faCheckCircle} /> Mẫu đa phong cách</p>
                <p><FontAwesomeIcon className='Logos-Social-item' icon={faCheckCircle} /> Quét mã QRCode</p>
                <NavLink to="/menu">
                <button> TẠO LINK BIO </button>
                </NavLink>
            </div>
            <Banner1/>
        </div>
    )
}

export default Home;