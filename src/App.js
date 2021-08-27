import Navbar from "./components/Navbar";
import CopyAlert from "./components/CopyAlert";
// import About from "./components/About"
import Form from "./components/textForm"
import React,{useState} from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  let toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#111111'
    }
    else if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='#f1d9d1'
    }
  }

  const [copyAlert, setcopyAlert] = useState(false);
  const showAlert= ()=>{
    setcopyAlert(true);
    setTimeout(()=>{
      setcopyAlert(false)
    },1500)
  }

  return (
    <div>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <CopyAlert alert={copyAlert}/>
      <div className="container">
        {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About mode={mode}/> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
            <Form heading="Enter text to analyse" mode={mode} toggleMode={toggleMode} copyAlert={showAlert}/>
          {/* </Route> */}
        {/* </Switch> */}
      </div>
    {/* </Router> */}
    </div>
  );
}

export default App;
