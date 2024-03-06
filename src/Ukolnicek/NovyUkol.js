import { Button } from "@mui/material"
import { useState } from "react"
import { TextField} from "@mui/material"

export default function NovyUkol({pridejUkol}){
    const[ukol,nastavUkol] = useState(" ")
    
    

    
    return(
    <>
    <div className="ukoly ">
    <TextField id="outlined-basic" label="Outlined" variant="outlined" value={ukol} onChange={(udalost) => nastavUkol(udalost.target.value) }></TextField><br></br>
    {/* <input value={ukol} onChange={(udalost) => nastavUkol(udalost.target.value) }></input> */}
   {/*<button onClick={() => pridejUkol(ukol)}> Přidej úkol</button> <br/>*/}
   <Button variant="contained" onClick={() => pridejUkol(ukol)}> Přidej úkol</Button>
    </div>
    </>
    )
}
