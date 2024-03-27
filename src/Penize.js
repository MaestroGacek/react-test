import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Penize(props) {
    const [value, setValue] = React.useState(2);
    return (
        <>
            <Typography variant="h1">Dej mi peníze PLS</Typography>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Obnos peněz</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="30 USD"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="10 USD" control={<Radio />} label="10 USD" />
                    <FormControlLabel value="20 USD" control={<Radio />} label="20 USD" />
                    <FormControlLabel value="30 USD" control={<Radio />} label="30 USD" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        value={0}
                        InputLabelProps={{
                            shrink: true,
                        }}></TextField>
                </RadioGroup>

            </FormControl>
           

            <img src="Penize.jpg" style={{ width: "185px" }}></img><br></br>
            <Button variant='contained' color='success'>Odeslat</Button>

            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Typography component="legend">Hodnocení Portfólia</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </Box>
        </>
    )
}