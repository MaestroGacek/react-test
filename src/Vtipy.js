import { useEffect, useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper'
import { Grid, Typography } from '@mui/material';
export default function Vtipy (){
    const [vtipy, nastavVtipy] = useState([])
    const [vybranyVtip, vyberVtip] = useState("")
    useEffect(() => { axios.get('https://official-joke-api.appspot.com/jokes/ten').then(odpoved => { nastavVtipy(odpoved.data) }) }, [])
    
    return (
  
      <>
      <Typography variant='h2'>Nejlepší vtipy</Typography><br></br>
  
        
          <Typography variant='body1'>{vybranyVtip != "" && <span>{vybranyVtip}</span>}</Typography><br></br>
        
        <Grid container spacing={4}>
          {vtipy.map(vtip => (
            
            <Grid item xs={6} key={vtip.id}>
              <Paper onClick={() => vyberVtip(vtip.setup + (" ") + vtip.punchline)} style={{textAlign:"center"}}>
            <Typography variant='caption'>
           {vtip.setup}<br></br>
                {vtip.title}
                </Typography>
              </Paper>
            </Grid>
  
          ))
  
          } </Grid>
      </>
    );
}