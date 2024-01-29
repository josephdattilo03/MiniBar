import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';

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
        <Route path='/login' Component={Login}></Route>
        <Route path></Route>
      </Routes>
    </BrowserRouter>
  )
}
