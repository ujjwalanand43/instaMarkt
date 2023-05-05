import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Privacy from './Pages/PrivacyPolicy/Privacy';
import Terms from './Pages/Terms';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar'
function App() {


  return (
    <>
 <BrowserRouter>
 <Navbar/>
 <Routes>
 <Route path='/' element={<Home/>}>  </Route>
  <Route path='/privacy-policy' element={<Privacy/>}>  </Route>

  <Route path='/terms-and-condition' element={<Terms/>}></Route>

 </Routes>
 </BrowserRouter>
   
    </>
  )
}

export default App;
