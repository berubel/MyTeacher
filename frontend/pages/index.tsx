import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import List from '../src/components/List/List'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {teacherList} = useIndex();

  return (
    <Box sx = {{backgroundColor: 'secondary.main'}}>
      <List teachers = {teacherList}></List>  
    </Box>
    
  )
}

export default Home
