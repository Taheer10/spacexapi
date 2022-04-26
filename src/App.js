import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SuccessfullLaunch from "./Components/SuccessfullLaunch";
import FailedLaunch from "./Components/FailedLaunch";
import LaunchBody from "./Components/LaunchBody";
import SuccessfullLand from "./Components/SuccessFullLand";
import FailedLanding from "./Components/FailedLanding";




function App() {
  return (
    <>
    <div className="App">
      <nav>
        <h1>SpaceX Launch Programs</h1>
      </nav>
      
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="successfull-launch" element={<SuccessfullLaunch />} />
        <Route path="failed-launch" element={<FailedLaunch />} />
        <Route path='launch-year'  element={<LaunchBody/>} />
        <Route path='successfull-land' element={<SuccessfullLand/>}/>
        <Route path="failed-landing" element={<FailedLanding />} />
         
      </Routes>
    </div>

    <footer style={{alignItems:'center', justifyContent:'center'}}>Developed By: TAHIR MIYA</footer>
    </>
  );
}

export default App;
