// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import Signin from './Pages/Login/Signin.jsx'
import Signup from './Pages/Signup/Signup.jsx'
import ResetPassword from './Pages/ResetPassword/ResetPassword.jsx'

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Router>
          <Signin/>
       
      </Router> */}
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
