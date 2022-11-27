import React, {useState} from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen'
export default function LoginScreen() {
    const [signIn, setSignIn] = useState(true)
  return (
    <div className='loginscreen'>
      <div className='loginscreen_background'>
      <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' className='loginscreen_logo' alt='logo' />
      
      <button 
        onClick={() => setSignIn(true)}
        className='loginscreen_button'>
        Sign In
      </button>
      <div className='loginscreen_gradient' />
      
      </div>
      <div className='loginscreen_body'>
        {
            signIn ? (
                <SignInScreen />
            ) : (
                <>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                
                 <div className='loginscreen_input'>
                   <form>
                     <input type="email" placeholder='Email Address' />
                     <button 
                      onClick={() => setSignIn(true)}
                     className='loginscreen_getstarted'>Get Started</button>
                   </form>
                 </div>
                </>
         
            )
        }
      </div>
    </div>
  )
}
