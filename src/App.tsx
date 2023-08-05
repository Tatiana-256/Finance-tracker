import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./homePage";

function App() {


  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
