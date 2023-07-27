// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Alert from './components/Alert'
function App() {
  const [theme,setTheme ] = useState("light");
  const [alertMsg,setAlertMsg ] = useState(null);//alert message hook

  const pickAlert=(parm)=>{
    setAlertMsg(parm);
    setTimeout(() => {
      setAlertMsg(null);
    }, 700);
  }

  const appTheme= (props) =>{
    setTheme(props);
  }

  if(theme==='light'){
    document.body.style.backgroundColor="#e9e5e5ab"
    document.body.style.color="black"
    document.body.style.fontStyle="inherit"
  }else if(theme==='dark'){
    document.body.style.backgroundColor="#020a32"
    document.body.style.color="white"
    document.body.style.fontStyle="inherit"
  }else if(theme==='reddish'){
    document.body.style.backgroundColor="#600000"
    document.body.style.color="#3fff00"
    document.body.style.fontStyle="inherit"
  }else{
    document.body.style.backgroundColor="#000000"
    document.body.style.color="rgb(0, 255, 0)"
    document.body.style.fontStyle="oblique"
  }

  return (
    <div>
      <Navbar title="firstReactApp" f1="Home" f2="About us" apptheme={appTheme} theme={theme} alertFun={pickAlert}/>
      <div style={{height:'30px'}}><Alert msg={alertMsg} /></div>
      <div className="container">
        <Textbox theme={theme} alertFun={pickAlert}/>
      </div>
    </div>
  );
}

export default App;
