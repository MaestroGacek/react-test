import { Button, Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import {Outlet } from "react-router-dom"
export default function Layout(){

    return (
        <>
            <Typography>
                <nav>

                    <Button variant="text">  <MuiLink href="/react-test/#" underline="none" variant="h6">Home</MuiLink>
                    </Button> 
                    <Button variant="text">      <MuiLink href="/react-test/#/Vtipy" underline="none" variant="h6">Vtipy</MuiLink>
                    </Button> </nav><Outlet></Outlet>
            </Typography>
        </>
    )
}
