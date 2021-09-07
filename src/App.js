import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
function App() {
  
  const[mode,setmode]=useState('light')
  const[alert,setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({
       msg:message,
       type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      showalert("Dark mode has been enabled","success")
      document.title="TextUtils - Darkmode"
      // setInterval(() => {
      //    document.title="TextUtils is amazing"
      // }, 2000);
      // setInterval(() => {
      //    document.title=" insatll now TextUtils "
      // }, 1500);
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
       showalert("Light mode has been enabled","success")
         document.title="TextUtils - lightmode"
      }
    }
  
  return (
     <>
 {/* <Navbar title="Text Utils" about="About Us"/> */}
 {/* <Navbar/> */}
     {/* <Router> */}
     <Navbar title="Text Utils" mode={mode} togglemode={togglemode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     {/* <Switch>
       <Route exact path="/about">
         <About/>
       </Route>
       <Route exact path="/"> */}
        <Textform   showalert={showalert} heading="Enter the text to analyse below" mode={mode}/>
       {/* </Route>
     </Switch> */}
     </div>
      {/* </Router> */}
     </>
  );
}

export default App;
