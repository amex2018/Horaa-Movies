import React,{useState, useEffect} from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const [show, setshow] =useState(false);
     const history = useNavigate();
    const transitionScroll = () =>{
        if(window.scrollY > 100){
            setshow(true)
        }else{
            setshow(false)
        }
    }
    useEffect(() => {
      window.addEventListener('scroll', transitionScroll);
      return () => window.removeEventListener('scroll', transitionScroll)
    },[])
  return (
    <div className={`nav ${ show && `nav-black`}`}>
        <div className='nav-content'>
        <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' className='nav-logo' alt='logo' />
        
        <img
         onClick={() => history("/profile")}
         src='https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg' 
         className='nav-avatar' 
         alt='avatar' />
    
        </div>
    </div>
  )
}
