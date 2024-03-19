import { useState } from "react";
import NovyUkol from "./NovyUkol";
import PolozkaUkolu from "./PolozkaUkolu";
import Typography from '@mui/material/Typography';
export default function Ukolnicek() {
    const [seznam, nastaSeznam] = useState([
        {text: "Nový úkol", hotovo: false},
        {text: "Další úkol", hotovo: false},
        {text: "Splněný úkol", hotovo: true}
    ])
    const [pocet,nastavPocet] = useState(3)
    const [barvaTlacitka,nastavBarvu] = useState("blue")
 
    function nahodnaBarva(){
        return Math.floor(Math.random()*255);
    }
   
    function pridejUkol(novyUkol,) {
    let barvaTlacitka = `rgb(${nahodnaBarva()}, ${nahodnaBarva()}, ${nahodnaBarva()})`;
        nastavBarvu(barvaTlacitka)
        let novyUkolObj = {text: novyUkol, hotovo: false}
        nastaSeznam([...seznam, novyUkolObj])
        nastavPocet(pocet +1)

    }
    function smazUkol(poradiUkol){
        console.log("smazat ukol, ", poradiUkol)
        let upraveneUkoly = [... seznam]
        upraveneUkoly.splice(poradiUkol, 1)
        nastaSeznam(upraveneUkoly)
        nastavPocet(pocet -1)

    }
    function splnUkol(poradiUkol){
        let upravenySeznam = [... seznam]
     if  (upravenySeznam[poradiUkol].hotovo == true){
        upravenySeznam[poradiUkol].hotovo = false

     }else{
        upravenySeznam[poradiUkol].hotovo = true
     }
      nastaSeznam(upravenySeznam)
      //pocetHotovych()


    }
    
// function pocetHotovych(){
//     let hotove = 0
//     for (let ukol of seznam){
//         if (ukol.hotovo){
//             hotove++
//         }
//     }return hotove;
// }
    

    
       
    // function vypisUkoly(){
    //     let vypis = ''  
    //     for (let ukol of seznam){
    //         vypis.concat(ukol).concat("<br>/")        
    //     }
    //     return vypis
    // }
    
    return (
        <>
        <h1>Ukolníček</h1>
             <Typography variant="h6" gutterBottom>
            <NovyUkol pridejUkol={pridejUkol}></NovyUkol>
            <div id="ukoly">
            {seznam.map((ukol, poradi) => (<>
                <PolozkaUkolu key={poradi} ukol={ukol} poradi={poradi} smazUkol ={smazUkol} splnUkol={splnUkol}
                ></PolozkaUkolu>
               
            </>))
            }<br></br>
        Počet úkolů: {pocet}, Počet splněných úkolů: {seznam.filter(ukol => ukol.hotovo).length}, Počet TODO: {seznam.filter(ukol => !ukol.hotovo).length} 
           
            </div>
            
            </Typography>
            <button onClick={() => pridejUkol("Nový úkol")} style={{backgroundColor: barvaTlacitka }}>Pridej nahodný ukol</button>
        </>
      

    )
}