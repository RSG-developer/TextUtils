
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode is Enale","Succes")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Dark Mode is Enale","Succes")
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    <>
    <div>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
   
    <Alert alert={alert} />
    </div>
    <div className="container my-3">
    <Textform showAlert={showAlert} heading="Enter your text for analyses" mode={mode}/>
    </div>
  
   </>
   
  
  );
}

export default App;
