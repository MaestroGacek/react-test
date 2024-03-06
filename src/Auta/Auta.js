import DataAuta from './DataAuta.json';
function ukazInfo(nazev, trida){
    window.alert("Auto " + nazev +", " + " Třída auta " + trida + " " )
}
function Auta(props){

   
    return(  <>
    {DataAuta.map(auta =>
      <Auta
      image = {auta.image}
      title = {auta.title}
      class = {auta.class}
       />)}

        <a href={"https://cs.wikipedia.org/w/index.php?search="+props.title+"&title=Speci%C3%A1ln%C3%AD%3AHled%C3%A1n%C3%AD&ns0=1&ns100=1&ns102=1"}>

    <div className="profil" onClick={() => ukazInfo(props.title,props.class)}>
    <img src={props.image}></img>
    <div className="profilove_informace">
    <table>
        <tbody>
        <tr>
       <th>Název</th> <td>{props.title}</td>
        <th>Třída:</th> <td>{props.class}</td>
       
        </tr>
        </tbody>
    </table>
  
    </div>
    </div>
    </a>
   
    
    
    

   
   
  
  
   
    </>
    )

}
export default Auta;