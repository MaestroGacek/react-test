import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@mui/material"
import { Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
function Eshop() {
  const [produkty, nastavProdukty] = useState([])
  const [vybranyProduk, vyberProdukt] = useState("")
  
  useEffect(() => { axios.get('https://fakestoreapi.com/products').then(odpoved => { nastavProdukty(odpoved.data) }) }, [])
  
  return (

    <>
    <Typography variant='h2'>Můj Eshop</Typography><br></br>

      
        <Typography variant='body1'>{vybranyProduk != "" && <span>Cena v košíku je: {vybranyProduk}</span>}</Typography><br></br>
        
        <Button size='small'  variant="contained" startIcon={<DeleteIcon/>} color="error" onClick={ () =>vyberProdukt (produkty== 0)}>Odebrat všechny produkty z košíku</Button>   
      <Grid container spacing={4}>
      
        {produkty.map(produkt => (
          
          <Grid item xs={6} key={produkt.id}>
            {/* <Paper onClick={() => vyberKavu(kava.title)} style={{textAlign:"center"}}> */}
            <Button color='success' variant='outlined' onClick={() => vyberProdukt(parseFloat(vybranyProduk + produkt.price))} style={{textAlign:"center"}} >Přídat: {produkt.price}</Button>
          
          <Typography variant='caption'>
              <img src={produkt.image} style={{ width: "250px"}}></img><br></br>
              {produkt.title}<br></br>
              
              </Typography>
            
          </Grid>

        ))

        } </Grid>
    </>
  );

}




export default Eshop;
