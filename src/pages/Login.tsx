
import { Button, Grid, TextField, Typography, Box } from "@mui/material";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../utils/store";
import { setToken } from "../utils/slice";
import { ENDPOINTS } from "../utils/sevices";


function Login() {
    const [inputEmail, setEmail] = useState<string>('');
    const [inputPassword, setPassword] = useState('');
    const navigate = useNavigate();
    const [count, setCount] = useState<number>(0);
    const [emailMessage, setEmailMessage] = useState<ReactNode>('');
    const [passwordMessage, setPasswordMessage] = useState<ReactNode>('');
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        setCount(count + 1)
    }, [inputPassword])
 
    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    }
    const validateEmail = (email: any) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailMessage('Please enter a valid email address');
        } else {
            setEmailMessage('');
        }
    }
    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        const newpassword = e.target.value;
        setPassword(newpassword);
        validatePassword(newpassword)
    }
    const validatePassword = (password: any) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordMessage('Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character');
        } else {
            setPasswordMessage('');
        }
    }
    const HandleSubmit = async () => {
        var data = {
            email: inputEmail,
            password: inputPassword
        }
       await axios.post(ENDPOINTS.LOGIN_URL, data)
        .then((response)=>{
            if(response.data.success == true){
                dispatch(setToken({AUTHKEY:response.data.token}))
                navigate('/');
            }
            else{
                alert(response.data.success)
            }
        }).catch((error)=>{
            alert(error)
        })
    }
    const ForgetPassword = () => {
        navigate('/forgot-password')
    }
    return (
        <Grid container sx={{ display: 'flex' }}>
            <Grid item xs={5} sx={{ px: '4%', display: 'flex', backgroundColor: "#EEF2FF", height: '100vh', backgroundImage: `url(${'img/login-bg.svg'})`, justifyContent: 'center', alignItems: 'center' }}>
                <img src='img/employee.png' alt="cover-pic" width={'100%'} height={'auto'} style={{ maxHeight: "80vh" }} />
            </Grid>
            <Grid item xs={6.3} sx={{ display: 'flex' }}>
                <Grid container sx={{ paddingTop: "160px", pl: '115px', flexDirection: 'column' }}>
                    <Grid item sx={{ display: 'flex' }}>
                        <img src="img/logo-def.png" width={'228.165px'} height={'86.775px'} />
                        <Box sx={{ mx: 2, mt: 'auto', height: '62.761px', width: '2px', bgcolor: 'rgba(0, 0, 0, 0.16);' }} />
                        <img src="img/logo.png" width={'73.226px'} height={'65.668px'} style={{ marginTop: '20px' }} />
                    </Grid>
                    <Grid item sx={{ mt: '21.89px' }}>
                        <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>Login To Account</Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: 400, opacity: 0.8, color: '#667085' }}>Please enter your email and password to continue</Typography>
                    </Grid>
                    <form action="POST">
                        <Grid item sx={{ mt: '49px' }}>
                            <Typography>Email address</Typography>
                            <TextField  type="email"  variant="outlined" onChange={handleEmailChange} sx={{ width: '80%', mt: '15px' }} InputProps={{
                                style: {
                                    borderRadius: '12px',
                                    border: '1px solid #D8D8D8'
                                }
                            }} required /><br />
                            {emailMessage && (<span style={{color: "red"}}>{emailMessage}</span>)}
                        </Grid>
                        <Grid item sx={{ mt: '37px' }}>
                            <Grid sx={{ display: "flex", justifyContent: 'space-between', width: '80%' }}>
                                <Typography>Password</Typography>
                                <Typography onClick={ForgetPassword}>Forgot Password ?</Typography>
                            </Grid>
                            <TextField className="password"
                                id="outlined-basic"
                                type="password"
                                variant="outlined"
                                onChange={handlePasswordChange}
                                sx={{ width: '80%', mt: '15px' }}
                                InputProps={{
                                    style: {
                                        borderRadius: '12px',
                                        border: '1px solid #D8D8D8',
                                        color: "#A6A6A6"
                                    }
                                }}
                                required
                            /><br />
                            {passwordMessage && (<span style={{color:'red'}}>{passwordMessage}</span>)}
                        </Grid>
                        <Grid sx={{ mt: '37px' }}>
                            <Button variant="contained" sx={{ width: '80%', borderRadius: '16px', height: '56px' }} onClick={HandleSubmit}>Log in</Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login
