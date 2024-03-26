import { Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import { Link, Outlet } from "react-router-dom"



const Layout = () => {
    return (
        <>
            <Typography>
                <nav>
                    
                        <li style={{ listStyleType: "none" }}>
                            <MuiLink href="/Portfolio-react/#"  underline="none" variant="h6" color={"black"}>Home</MuiLink></li>
                        <li style={{ listStyleType: "none" }}>
                            <MuiLink href="/Portfolio-react/#/cafe"  underline="none" variant="h6" color={"black"}>Cafe</MuiLink></li>
                        <li style={{ listStyleType: "none" }}>
                         <MuiLink href="/Portfolio-react/#/kalkulacka"  underline="none" variant="h6" color={"black"}>Kalkulacka</MuiLink></li>
                        <li style={{ listStyleType: "none" }}>
                            <MuiLink href="/Portfolio-react/#/pocitadlo"  underline="none" variant="h6" color={"black"}>Pocitadlo</MuiLink></li>
                        <li style={{ listStyleType: "none" }}>
                           <MuiLink href="/Portfolio-react/#/pocitadlo2"  underline="none" variant="h6" color={"black"}>Pocitadlo2</MuiLink></li>


                        <li style={{ listStyleType: "none" }}>
                            <MuiLink href="/Portfolio-react/#/prumer"  underline="none" variant="h6" color={"black"}>Prumer</MuiLink></li>
                        <li style={{ listStyleType: "none" }}>
                          <MuiLink href="/Portfolio-react/#/ukolnicek"  underline="none" variant="h6" color={"black"}>Ukolnicek</MuiLink></li>
                        <li style={{ listStyleType: "none" }}><MuiLink href="/Portfolio-react/#/eshop"  underline="none" variant="h6" color={"black"}>E-shop</MuiLink></li>
                        <li style={{ listStyleType: "none" }}><MuiLink href="/Portfolio-react/#/eshop2"  underline="none" variant="h6" color={"black"}>E-shop2</MuiLink></li>
                        <li style={{ listStyleType: "none" }}><MuiLink href="/Portfolio-react/#/eshop3" underline="none" variant="h6" color={"black"}>E-shop3</MuiLink></li></nav><Outlet></Outlet>
            </Typography>
        </>
    )
}
export default Layout;