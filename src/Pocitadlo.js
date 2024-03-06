import { useState } from "react";
import { Button } from "@mui/material"


function Pocitadlo() {

    const [pocet, nastavPocet] = useState(20)
    const [viditelnost, nastavViditelnost] = useState(true)
    const [viditelnostObrazku, nastavViditelnostObrazku] = useState(false)

    return (
        <>

            { viditelnost && 
                <div>
                    <h2 style={{ color: "red", fontSize: pocet }}>Font size: {pocet}</h2>
                  
                    
                    <Button  color="primary" variant="contained" onClick={() => nastavPocet(pocet + 1)}>Přidej</Button>
                   <Button color="primary" variant="contained" onClick={() => nastavPocet(pocet - 1)}>Odeber</Button>
               
              </div>

            }
            {!viditelnost && <Button onClick={() => nastavViditelnost(true)}>Zobrazit</Button>}
            {/* viditelnost == false &&  <button onClick={() => nastavViditelnost(true)}>Zobrazit</button>} */}
            {viditelnost && <Button onClick={() => nastavViditelnost(false)}>Skrýt</Button>}
            <br/>
            <br/>
            <br/>
            <Button color="secondary" onClick={() => nastavViditelnostObrazku(!viditelnostObrazku)}>Zobrazit / skrýt vtip</Button>
            <br/>
            <br/>
            {viditelnostObrazku &&
                <img src="joke.jpg" style={{ width: "250px"}}/> 
            }
        </>
    );
}

export default Pocitadlo;