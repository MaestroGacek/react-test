import { Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import {Outlet } from "react-router-dom"
export default function Layout(){

    return (
        <>
            <Typography>
                <nav>
                       <MuiLink href="/react-test/#" underline="none" variant="h6" style={{ color: "blue" }}>Home</MuiLink>

                        <MuiLink href="/react-test/#/Vtipy" underline="none" variant="h6" style={{ color: "blue" }}>Vtipy</MuiLink>
                   </nav><Outlet></Outlet>
            </Typography>
        </>
    )
}
