import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Register from './pages/Register';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import Home from './pages/Home';
import RequireLogin from './components/RequireLogin';
import Login from './pages/Login';
import Drink from './pages/Drink';

export default function Router() {

  const [user, setUser] = useState(null);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/welcome' Component={Welcome}></Route>
        <Route path='/register' Component={Register}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/' element={<RequireLogin user={user}><Home></Home></RequireLogin>}></Route>
        <Route path='/drink' element={<RequireLogin user={user}><Drink></Drink></RequireLogin>}/>
      </Routes>
    </BrowserRouter>
  )
}
