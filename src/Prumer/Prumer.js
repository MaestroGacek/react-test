import {useEffect, useState} from "react";
import "./styll.css";
import { Button } from "@mui/material"
import ButtonGroup from '@mui/material/ButtonGroup';
function  Prumer(){
    const [prumer,setPrumer] = (useState(localStorage.getItem("prumer") || 0));
    const [pocet,setPocet] = (useState(localStorage.getItem("pocet") || 0));
    const [seznam,setSeznam] = useState("")

    useEffect(() => {
      setPocet(parseInt(localStorage.getItem("pocet") || 0))
  }, [])
  useEffect(() => {
      (localStorage.setItem("pocet", pocet))
  }, [pocet])
  
  
  useEffect(() => {
    setPrumer(parseInt(localStorage.getItem("prumer") || 0))
}, [])
useEffect(() => {
    (localStorage.setItem("prumer", prumer))
}, [prumer])

  
    
    


    function setCislo(cislo){
        setSeznam(seznam + "" + cislo+", ")
      //  document.getElementById("pocet").innerHTML += parseInt(pocet) + ", 
        setPocet(pocet + 1)
        setPrumer(prumer + cislo)
      console.log(pocet)
    }
    let prm = prumer / pocet
    prm 
   
   
  


    
    return(
        <>
        <div id="obraz">Průmer:{prm}</div>
      {(prm == 1) && <span id="styl" style={{color:"green"}}></span>} 
      {(prm == 2)  && <span id="styl" style={{color:"green"}}></span> } 
      {(prm == 3)  && <span id="styl" style={{color:"orange"}}></span>} 
      {(prm == 4 ) && <span id="styl" style={{color:"orange"}}></span>}
      {(prm == 5)  && <span id="styl" style={{color:"red"}}></span>} 
      <ButtonGroup variant="outlined" aria-label="Basic button group" color="primary">
        <Button id="tlacitka" onClick={ () =>setCislo (1) }>1</Button>
        <Button id="tlacitka" onClick={ () =>setCislo (2) }>2</Button>
        <Button id="tlacitka" onClick={ () =>setCislo (3) }>3</Button>
        <Button id="tlacitka" onClick={ () =>setCislo (4)}>4</Button>
        <Button id="tlacitka" onClick={ () =>setCislo (5)}>5</Button>
        </ButtonGroup>
      
        <div id="seznam" >Známky:{seznam}</div>

        </>
    )

}
export default Prumer;