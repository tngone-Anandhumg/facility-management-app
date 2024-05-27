import { Button, CircularProgress, Grid, Typography } from '@mui/material'
import TaskList from '../components/TaskList'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { ENDPOINTS } from '../utils/sevices';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/store';
import { useNavigate } from 'react-router-dom';

interface DatasTypes {
    actionPlan: string,
    concept: string,
    status: string,
    location: string,
    concernRaisedDate: string,
}
function TaskManagement() {
    const [datas, setDatas] = useState<DatasTypes[]>([]);
    const headers = useSelector((state: RootState) => state.auth.token)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true)
        const body = {
            concept: "",
            location: "",
            poc: "",
            responsibility: "",
            status: "",
            priority: "",
            toDate: "0001-01-01",
            fromDate: "0001-01-01",
            pageNumber: 0,
            rowsPerPage: 0
        }
        axios.post(ENDPOINTS.GET_ALL_TASKS, body, { headers })
            .then((response) => {
                setDatas(response.data);
            }).catch((error) => {
                alert(error)
                setLoading(false)
            }).finally(() => { setLoading(false) })
    }, [])
    return (
        <>
            <Grid sx={{ display: 'flex', justifyContent: 'space-between' }} >
                <Typography sx={{ fontSize: '20px' }}>Task Management</Typography>
                <Grid sx={{ display: 'flex', gap: '12px' }}>

                    <Button variant="outlined"
                        sx={{
                            borderRadius: '11.93px',
                            color: '#0368E9',
                            width: '168px',
                            height: '39.92px',
                            textTransform: 'none'
                        }}>
                        <img src='/img/Download.svg' width={'21px'} height={'21px'} />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                ml: "4px"
                            }}>
                            Download
                        </Typography>
                    </Button>
                    <Button variant='contained'
                        sx={{
                            bgcolor: '#0D0D0D',
                            width: '131px',
                            height: '42.26px',
                            borderRadius: '10.7px',
                            textTransform: 'none'
                        }}>
                        <img src='/img/Filter.svg' />
                        <Typography
                            sx={{
                                ml: '4px',
                                fontSize: '14px'
                            }}>
                            Filter
                        </Typography>
                    </Button>
                    <Button variant="contained"
                    onClick={()=>navigate('/add-task')}
                        sx={{
                            borderRadius: '11.93px',

                            width: '147px',
                            height: '39.92px',
                            textTransform: 'none'
                        }}>
                        <img src='/img/iconplus.svg' width={'14px'} height={'14px'} />
                        <Typography
                            sx={{
                                fontSize: '14px',
                                ml: "4px"
                            }}>
                            Add Task
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
            <Grid container gap={'31px'} mt={'30px'} display={'flex'} flexWrap={'wrap'}>
                {loading ?
                    <Grid
                        sx={{ width: "100vw", height: "85vh", justifyContent: "center", display: "flex", alignItems: "center" }}>
                        <CircularProgress color="inherit" />
                    </Grid>
                    :
                    datas.map((data, index) => {
                        return (
                            <TaskList key={index} task={data.actionPlan} taskFor={data.concept} taskStatus={data.status} location={data.location} date={data.concernRaisedDate} />
                        )
                    })
                }
            </Grid>
        </>
    )
}


export default TaskManagement
