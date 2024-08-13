import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enable or not

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
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enable ✅", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils - is Amazing";
      // }, 2000); 
      // setInterval(() => {
      //   document.title = " Install TextUtils Now";
      // }, 1500);
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = 'White';
      showAlert("Light Mode has been Enable ✅", "success");
      document.title = "TextUtils - light Mode";
    }
  }

  return (
    <>
{/* <Navbar title="Textutils" aboutText="About"/> */}
{/* <Navbar/>? */}
{/* <Router> */}
{/* <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/> */}
<Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
        {/* <Switch>
          <Route exact path="/"> */}
          <TextFrom showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/>
          {/* </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch> */}
        </div>
        {/* </Router> */}

   </>
  );
}

export default App;
