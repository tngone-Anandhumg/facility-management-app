import { Box, Grid, TextField, Typography } from '@mui/material'

function ViewOrEditTask() {
    return (
        <Grid container width={'60%'}>
            <Grid>
                Add Task
            </Grid>
            <Grid >
                <Box>
                    <Typography>Concept</Typography>
                    <TextField />
                </Box>
                <Box>
                    <Typography>Location</Typography>
                    <TextField />
                </Box>
                <Box>
                    <Typography>Maintenance work</Typography>
                    <TextField />
                </Box>
            </Grid>
        </Grid>
    )
}

export default ViewOrEditTask