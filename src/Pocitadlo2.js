import {useState} from "react";
import { Button } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

function Pocitadlo2(){
    const [pocet,setPocet] = useState(0)
    const [barva,setBarvu] = useState("black")
    return (
        <>
            <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
        >
       
        <h2 style={{color: barva}}>{pocet}</h2>
        <ButtonGroup  disableElevation variant="contained" aria-label="Disabled button group">
        <Button color="success" onClick={ () =>setPocet (pocet +1)}>Plus</Button>
        <Button   color="error"onClick={ () =>setPocet (pocet -1)}>Mínus</Button>
        
        </ButtonGroup><br></br>

        <ButtonGroup color="secondary" aria-label="Medium-sized button group" >
        <Button   variant="contained" color="primary" onClick={ () =>setPocet (pocet /2)}>Dělit</Button>
        <Button  variant="contained" color="primary" onClick={ () =>setPocet (pocet  * pocet)}>Mocnina</Button>
        <Button  variant="contained" color="primary" onClick={ () =>setPocet (pocet )}>Odmocnina</Button>
        <Button   variant="outlined" color="secondary" onClick={ () =>setBarvu ("blue")}>Změna barvy looool</Button> </ButtonGroup><br></br>

        <Button  variant="contained" startIcon={<DeleteIcon/>} color="error" onClick={ () =>setPocet (pocet == 0)}>RESET</Button>
    </Box>
        </>
    )
}
export default Pocitadlo2;