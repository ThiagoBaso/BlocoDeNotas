import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {React, useContext} from "react";

import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {AuthContext} from "./services/AuthContext";
import {Home} from "./pages/Home";

const App = () => {

  const currentUser = useContext(AuthContext);  

  const PrivateRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/login"/>
    }else {return children}
  }

  const Logged = ({children}) => {
    if(currentUser) {
      return <Navigate to="/home"/>
    }else {return children}
  }

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="*" element={<Logged><Login /></Logged>} />
        <Route path="/login" element={<Logged><Login /></Logged>} />
        <Route path="/register" element={<Logged><Register /></Logged>} />
        
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
