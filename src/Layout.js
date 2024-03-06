import { Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom"


const Layout = () => {
    return (
        <>
        <Typography>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li>
                        <Link to="/cafe">Cafe</Link></li>
                    <li>
                        <Link to="/kalkulacka">Kalkulacka</Link></li>
                    <li>
                        <Link to="/pocitadlo">Pocitadlo</Link></li>
                        <li>
                        <Link to="/pocitadlo2">Pocitadlo2</Link></li>
                    
                   
                    <li>
                        <Link to="/prumer" >Prumer</Link></li>
                    <li>
                        <Link to="/ukolnicek">Ukolnicek</Link></li></ul></nav><Outlet></Outlet>
                        </Typography>
                        </>
    )
}
export default Layout;