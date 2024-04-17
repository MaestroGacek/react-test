import { Button } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
export default function PolozkaUkolu({ukol, poradi, smazUkol, splnUkol}){
    return(
        <>
        <div className="ukol">
     <span>{poradi}</span>
     {!ukol.hotovo && <span className="textUkolu">{ukol.text}</span>}
      {ukol.hotovo && <span className="splneny-ukol">{ukol.text}</span>} <br></br>
    
      <Button variant="contained" color="success" size="small"  onClick={() => splnUkol(poradi)}>Hotovo</Button>
      <IconButton aria-label="delete" size="medium" color="error"  onClick={() => smazUkol(poradi)}><DeleteIcon fontSize="inherit"/>Smaž úkol</IconButton>
      
      

     </div>
        </>
        
    )
}