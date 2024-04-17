import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";
import Home from "./Home";
import Vtipy from "./Vtipy"
import { useEffect, useState } from "react";
 
function App() {
 
  
 
  return (
    <HashRouter basename='/'>
    <Layout vybranyVtip={vybranyVtip}/>
    <Routes>
        <Route index element={<Home/>} />
        <Route path="/Vtipy" element={<Vtipy/>} />
   
    </Routes>
    </HashRouter>
   
  );
}
 
export default App;