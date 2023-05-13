

import './App.css';
import Aboutus from './components/Aboutus';
import Alert from './components/Alert';
//import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import React, { useState } from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode  has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode  has been enabled","success");

    }
  }
  return (
  <>
    <Router>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<Aboutus/>}>
          </Route>
          <Route path="/" element={<Textforms showAlert={showAlert} heading="TextModifier-word counter | character counter | remove extra spaces" mode={mode}/>
}>          </Route>
        </Routes>  
      </div>

    </Router>
  </>
  );
}

export default App;
