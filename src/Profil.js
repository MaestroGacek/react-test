function Profil(props){
   
    return(
        props.id == 1 &&
    <>
    
    <div className="profil">
    <img src={props.obrazek}></img>
    <div className="profilove_informace">
    <h1>Ahoj uživateli {props.jmeno} {props.prijmeni}</h1>
    <table>
        <tbody>
        <tr>
        <th>Věk:</th> <td>{props.vek}</td>
        <th>Bydliště:</th> <td>{props.mesto}</td>
        </tr>
        </tbody>
    </table>
    </div>
    </div>
    
    </>
    )
    


}
export default Profil;