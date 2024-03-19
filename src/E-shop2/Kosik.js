import {Typography} from "@mui/material";
import { Button } from "@mui/material"
import Polozka from "./Polozka"
 
export default function Kosik(props){
    const kosik = props.obsahKosiku
   
    function cenaKosiku() {
        let soucet = 0
        for (let zbozi of kosik) {
            soucet += zbozi.polozka.price * zbozi.mnozstvi
        }
        return soucet
    }
 
    return (
    <>
    <Typography variant="h5" gutterBottom>Cena košíku: {cenaKosiku()}</Typography>
    {
        kosik.map(zbozi =>
        <div key={zbozi.polozka.id}>
        <Typography variant="h5" gutterBottom>Nazev: {zbozi.polozka.title}</Typography>
        <Typography variant="h5" gutterBottom>Množstvi: {zbozi.mnozstvi}</Typography>
        <Button color="error" variant="contained" onClick={()=>props.odebratPolozku(zbozi)}>Odeber</Button>
 
       
        <Polozka data = {zbozi} key={zbozi.id}/>
        </div>
        )
    }
    </>
    )
 
}