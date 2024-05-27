import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import TaskStyle from './Tasks.module.css';

function AddTask() {
    return (
        <Grid width={'66%'}>
            <Grid>
                Add Task
            </Grid>
            <Grid >
                <Grid display={'flex'} gap={'30px'} >
                    <Box sx={{maxWidth:'100%', width:500}}>
                        <Typography>Concept</Typography>
                        <TextField fullWidth variant="outlined"/>
                    </Box>
                    <Box flex={1}>
                        <Typography>Location</Typography>
                        <TextField   variant="outlined" />
                    </Box>
                </Grid>
                <Box >
                    <Typography>Maintenance work</Typography>
                    <TextField sx={{width:'100%'}} variant="outlined"/>
                </Box>
                <Grid display={'flex'} gap={'30px'}>
                    <Box>
                        <Typography>Person to contact in store name</Typography>
                        <TextField  variant="outlined"/>
                    </Box>
                    <Box>
                        <Typography>Responsibility</Typography>
                        <TextField variant="outlined"/>
                    </Box>
                </Grid>
                <Grid display={'flex'} gap={'30px'}>
                    <Box>
                        <Typography>Concern raise date</Typography>
                        <TextField variant="outlined"/>
                    </Box>
                    <Box>
                        <Typography>Raised Time</Typography>
                        <TextField variant="outlined"/>
                    </Box>
                </Grid>
                <Grid display={'flex'} gap={'30px'}>
                    <Box>
                        <Typography>Priority</Typography>
                        <TextField variant="outlined"/>
                    </Box>
                    <Box>
                        <Typography>status</Typography>
                        <TextField variant="outlined"/>
                    </Box>
                </Grid>
                <Grid display={'flex'} gap={'30px'}>
                    <Box>
                        <Typography>Aging</Typography>
                        <TextField variant="outlined"/>
                    </Box>
                    <Box>
                        <Typography>Approved Quoatation Date</Typography>
                        <TextField variant="outlined"/>
                    </Box>
                </Grid>
                <Box>
                    <Typography>Action Plan</Typography>
                    <TextField label="Enter Action Plan" variant="outlined"/>
                </Box>
                <Grid display={'flex'} justifyContent={'flex-end'}>
                    <Button>Save</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AddTask