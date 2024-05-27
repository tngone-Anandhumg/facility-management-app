import { Grid, Typography } from "@mui/material"
import OtpTimer from "../components/OTPTimer";

function Verification() {
    return (
        <Grid container sx={{ minHeight: '100vh' }}>
            <Grid item xs={6}>
                <Grid sx={{ width: '71.66%', height: '40.74%', mt: '31%', ml: '21.5%' }}>
                    <Typography sx={{ color: '#202224', fontSize: '45px', fontWeight: '500' }}>OTP</Typography>
                    <Typography sx={{ color: '#202224', fontSize: '45px', fontWeight: '500', lineHeight: '40.57px' }}>Verification</Typography>
                    <Grid sx={{ mt: '2.99%' }}>
                        <OtpTimer />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid sx={{ width: '77.41%', height: '59.75%', bgcolor: '#EEF2FF', borderRadius: '32px', mt: '20.11%' }}>
                    <Grid display={'flex'} justifyContent={'center'} py='18.95%'>
                        <img src="img/one-time-password.png" alt="reset-password" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Verification