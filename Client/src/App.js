import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Component/Home';
import QRCode from "./Component/QRCode";
import Register from "./Component/Register";
import Login from "./Component/Login"
import QuickInfo from "./Component/QuickInfo";
import MenuSocialMedia from "./Component/MenuSocialMedia";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
function App() {
  
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route element={<Home/>} path='/' exact /> 
        <Route element={<QuickInfo/>} path="/quick-info" exact/>
        <Route element={<MenuSocialMedia/>} path='/add-social-media' />
        <Route element={<Register/>} path="/new-quick-account"/>
        <Route element={<Login/>} path="/login-quick"/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
