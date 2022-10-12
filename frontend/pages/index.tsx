import { Box, Dialog, DialogActions, Grid, TextField, Button, Snackbar } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import List from '../src/components/List/List'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {
    teacherList,
    name, 
    setName, 
    email, 
    setEmail,
    selectedTeacher,
    setSelectedTeacher,
    bookClass,
    message,
    setMessage
  } = useIndex();

  return (
   <div>
      <Box sx = {{backgroundColor: 'secondary.main'}}>
        <List 
          teachers = {teacherList}
          onSelect={(teacher) => setSelectedTeacher(teacher)}
        ></List>  
      </Box>
      <Dialog onClose={() => setSelectedTeacher(null)} open={selectedTeacher !== null} fullWidth PaperProps={{sx: {p:5}}}>
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
          <Button onClick={() => setSelectedTeacher(null)}>Cancel</Button>
          <Button onClick={() => bookClass()}>Book</Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        message={message} 
        open={message.length > 0}
        autoHideDuration={2500}
        onClose={() => setMessage('')}
      />

   </div>
    
  )
}

export default Home
