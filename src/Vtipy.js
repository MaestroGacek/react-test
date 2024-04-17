import { useState, useEffect } from "react";
import axios from "axios";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Vtipy(props) {
    const [vtipy, nastavVtipy] = useState([]);
    const [vybranyVtip, nastavVybranyVtip] = useState("")


    useEffect(() => {
        axios.get('https://official-joke-api.appspot.com/jokes/ten')
            .then(odpoved => {
                nastavVtipy(odpoved.data);
                console.log(odpoved.data)
            })
    }, [])



    return (
        <>

            <Typography variant="subtitle1">
                {vybranyVtip != "" && <span>Vybraný vtip: {vybranyVtip}</span>}
            </Typography>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Id</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Setup</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {vtipy.map((vtip) => (
                            <TableRow onClick={() => nastavVybranyVtip(vtip.setup + (" ") + vtip.punchline)}
                                key={vtip.id}
                            >
                                <TableCell align="right">{vtip.id}</TableCell>
                                <TableCell align="right">{vtip.type}</TableCell>
                                <TableCell align="right">{vtip.setup}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Vtipy;