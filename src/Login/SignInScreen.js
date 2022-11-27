import React, {useRef} from 'react';
import { auth } from '../firebase';
import './SignInScreen.css';

import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
export default function SignInScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    

    const register = (e) =>{
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) =>{
            console.log(authUser)
        }).catch((error) =>{
            alert(error.message)
        })

    }

    const signin = (e) => {
        e.preventDefault();
         signInWithEmailAndPassword(
            auth,
           emailRef.current.value,
           passwordRef.current.value
       ).then((authUser) =>{
           console.log(authUser)
       }).catch((error) =>{
           alert(error.message)
       })
    }
  return (
    <div className='signinscreen'>
 <form>
    <h1>Sign In</h1>
    <input ref={emailRef} placeholder='Email' type="email" />
    <input ref={passwordRef} placeholder='Password' type='password' />
    <button type='submit' onClick={signin}>Sign In</button>
 
   <h4>
    <span className='signscreen_gray'>New to Netflix? </span>
    <span className='signscreen_singup' onClick={register}>Sign Up Now</span>
   </h4>
 </form>
    </div>
  )
}
