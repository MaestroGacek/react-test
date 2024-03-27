import { Typography } from "@mui/material";
import { useState } from "react";
import Ctverec from "./Ctverec";
export default function Barva(props) {
    
    return (
        <>
            <Typography>Jaká je tvoje oblíbená barva</Typography>
            <input type="color" value={props.barva} onChange={(e) => props.nastavBarvu(e.target.value)}></input>
            <Ctverec oblibenaBarva={props.barva}/>
        </>

    )
}