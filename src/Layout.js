import { Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import { Link, Outlet } from "react-router-dom"



const Layout = () => {
    return (
        <>
            <Typography>
                <nav>
                    <ul>
                        <li style={{ listStyleType: "none" }}>
                            <Link to="/"><MuiLink component="button" underline="none" variant="h6" color={"black"}>Home</MuiLink></Link></li>
                        <li style={{ listStyleType: "none" }}>
                            <Link to="/cafe"><MuiLink component="button" underline="none" variant="h6" color={"black"}>Cafe</MuiLink></Link></li>
                        <li style={{ listStyleType: "none" }}>
                            <Link to="/kalkulacka"><MuiLink component="button" underline="none" variant="h6" color={"black"}>Kalkulacka</MuiLink></Link></li>
                        <li style={{ listStyleType: "none" }}>
                            <Link to="/pocitadlo" ><MuiLink component="button" underline="none" variant="h6" color={"black"}>Pocitadlo</MuiLink></Link></li>
                        <li style={{ listStyleType: "none" }}>
                            <Link to="/pocitadlo2"><MuiLink component="button" underline="none" variant="h6" color={"black"}>Pocitadlo2</MuiLink></Link></li>


                        <li style={{ listStyleType: "none" }}>
                            <Link to="/prumer" ><MuiLink component="button" underline="none" variant="h6" color={"black"}>Prumer</MuiLink></Link></li>
                        <li style={{ listStyleType: "none" }}>
                            <Link to="/ukolnicek"><MuiLink component="button" underline="none" variant="h6" color={"black"}>Ukolnicek</MuiLink></Link></li>
                        <li style={{ listStyleType: "none" }}><Link to="/eshop"><MuiLink component="button" underline="none" variant="h6" color={"black"}>E-shop</MuiLink></Link></li></ul></nav><Outlet></Outlet>
            </Typography>
        </>
    )
}
export default Layout;