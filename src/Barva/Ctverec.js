import { CardContent, Typography, Card } from "@mui/material"
export default function Ctverec(props) {
    const oblibenaBarva = props.oblibenaBarva
    return (
        <>
            <Card variant="outlined" style={{ width: "300px", backgroundColor: oblibenaBarva }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                        Moje oblíbená barva
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}