import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import OTP from './OTP';
import { useNavigate } from 'react-router-dom';

const OtpTimer: React.FC = () => {
    const initialTimer = localStorage.getItem('otpTimer') ? Number(localStorage.getItem('otpTimer')) : 180;
    const [timer, setTimer] = useState(initialTimer);
    const [showResend, setShowResend] = useState(false);
    const [showSubmitBtn,setShowSubmitBtn] = useState(false);
const navigate = useNavigate();

    const [otp, setOtp] = React.useState('');
    useEffect(()=>{
        if(otp.length == 6){
            setShowSubmitBtn(true);
        }else{
            setShowSubmitBtn(false);
        }
    },[otp]);
    const handleSubmit = () => {
        console.log(otp)
        navigate('/newpassword')
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    clearInterval(interval);
                    setShowResend(true);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    });

    useEffect(() => {
        localStorage.setItem('otpTimer', timer.toString());
    }, [timer]);

    const handleResend = () => {
        setTimer(15);
        setShowResend(false);
    };

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <Grid>
            <Typography sx={{ mt: '24.12px', color: '#2051E5', fontSize: '21px', fontWeight: 500 }}>{formatTime(timer)}</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: '100%',
                    mt: '17.95px'
                }}
            >
                <OTP separator={<span>  </span>} value={otp} onChange={setOtp} length={6} />
            </Box>
            <Grid display={'flex'} >
                <Box sx={{mt:'25px'}}>
                    <Typography sx={{fontSize:'23px'}}>I didn't recieve any code .</Typography>
                </Box>
                <Box>
                    <Button sx={{fontSize: '22px' ,pt:'21px' ,color:'#2051E5'}} onClick={handleResend} disabled={!showResend}>Resend</Button>
                </Box>
            </Grid>

            <Button  variant="contained" sx={{ mt: '3.45%', height: '56px', borderRadius: '12px',width:'69%' }} onClick={handleSubmit} disabled={!showSubmitBtn}>submit</Button>
        </Grid>
    );
};

export default OtpTimer;
