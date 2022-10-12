import { Box, Dialog, DialogActions, Grid, TextField, Button } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import List from '../src/components/List/List'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {teacherList, name, setName, email, setEmail} = useIndex();

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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type= "text"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
