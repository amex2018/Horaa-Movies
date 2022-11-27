
import './App.css';
import React, {useEffect} from 'react';
import HomeScreen from './HomeScreen/HomeScreen';
import {
   Routes, Route
} from 'react-router-dom'
import LoginScreen from './Login/LoginScreen';
import { auth } from './firebase';
import {useDispatch, useSelector} from 'react-redux'
import { login, logout, selectuser } from './features/userSlice';
import ProfileScreen from './Profilescreen/ProfileScreen';
function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();
  console.log(user)
  useEffect(() => {
       const unsubscribe =  auth.onAuthStateChanged((userAuth) =>{
        if(userAuth){
          dispatch(
            login({
              uid: userAuth.uid,
              email: userAuth.email
            })
          )
        }else{
          //logout
          dispatch(logout())
        }
       });

       return unsubscribe;
  }, [])

  return (
    <div className="App">
      {
        !user ? (
          <LoginScreen />
       ) : (
        <Routes>
          <Route path='/profile' element={<ProfileScreen />} />
        <Route exact path='/'  element={<HomeScreen />}/>
       </Routes>
       )
      }

    </div>
  );
}

export default App;
