import { Box, Dialog, DialogActions, Grid, TextField, Button } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import List from '../src/components/List/List'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {teacherList} = useIndex();

  return (
   <div>
      <Box sx = {{backgroundColor: 'secondary.main'}}>
        <List teachers = {teacherList}></List>  
      </Box>
      <Dialog open={true} fullWidth PaperProps={{sx: {p:5}}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              type= "text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type= "text"
              fullWidth
            />
            </Grid>
        </Grid>

        <DialogActions sx={{mt: 5}}>
          <Button>Cancel</Button>
          <Button>Book</Button>
        </DialogActions>
      </Dialog>

   </div>
    
  )
}

export default Home
