import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Vtipy from "./Vtipy";

function App() {
 
    
    return (
      <>
        <HashRouter basename='/'>
        <Layout/>
          <Routes>
              <Route index element={<Home></Home>} />
              <Route path="/Vtipy" element={<Vtipy></Vtipy>} />
              
         </Routes>
        </HashRouter>
  
  
      </>
    )
  
  }
  
  
  
  
  export default App;