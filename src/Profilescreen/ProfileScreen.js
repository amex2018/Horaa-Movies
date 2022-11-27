import React from 'react'
import Navbar from '../Navbar/Navbar'
import {useSelector} from 'react-redux'
import {selectuser} from '../features/userSlice'
import { auth } from '../firebase'
import './ProfileScreen.css'
export default function ProfileScreen() {
    const user  = useSelector(selectuser)
  return (
    <div className='profileScreen'>
       <Navbar />
       <div className='profileScreen_body'>
       <h1>Edit Profile</h1>

       <div className='profileScreen_info'>
       <img
         src='https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg' 
         alt='avatar' />

         <div className='profileScreen_details'>
          <h2>{user.email}</h2>
          <div className='profileScreen_plans'>
            <button className='profileScreen_signOut'
             onClick={() =>auth.signOut()}
            >Sign Out</button>
            </div>
         </div>
       </div>
       </div>
    </div>
  )
}
