import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home"; 
import Layout from "./Layout";
import Cafe from "./Cafe";
import Kalkulacka from "./Kalkulacka/Kalkulacka";
import Pocitadlo from "./Pocitadlo";
import Auta from "./Auta/Auta";
import Pocitadlo2 from "./Pocitadlo2";
import Profil from "./Profil";
import Prumer from "./Prumer/Prumer";
import Ukolnicek from "./Ukolnicek/Ukolnicek";
import Eshop from "./E-shop/Eshop";

function App() {
 
  
  return (
    <>
    <BrowserRouter >
    <Routes>
    <Route path="/" element={<Layout></Layout>} >
    <Route index element={<Home></Home>}/>
    <Route path="cafe" element={<Cafe></Cafe>}/>
    <Route path="kalkulacka" element={<Kalkulacka></Kalkulacka>}/>
    <Route path="pocitadlo" element={<Pocitadlo></Pocitadlo>}/>
    <Route path="pocitadlo2" element={<Pocitadlo2></Pocitadlo2>}/>
    <Route path="auta" element={<Auta></Auta>}/>
    <Route path="profil" element={<Profil></Profil>}/>
    <Route path="prumer" element={<Prumer></Prumer>}/>
    <Route path="ukolnicek" element={<Ukolnicek></Ukolnicek>}/>
    <Route path="eshop" element={<Eshop></Eshop>}></Route>
</Route>
   </Routes>
    </BrowserRouter>

  
    </>
  )

}




export default App;
