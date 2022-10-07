import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import List from '../src/components/List/List'

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Gabriele das Virgens",
      photo: 'https://github.com/berubel.png',
      description: 'Beauty Lessons',
      value: 500,
    },
    {
      id: 2,
      name: "Gabriele das Virgens",
      photo: 'https://github.com/berubel.png',
      description: 'Beauty Lessons',
      value: 500,
    },
    {
      id: 3,
      name: "Gabriele das Virgens",
      photo: 'https://github.com/berubel.png',
      description: 'Beauty Lessons',
      value: 500,
    },
    {
      id: 4,
      name: "Gabriele das Virgens",
      photo: 'https://github.com/berubel.png',
      description: 'Beauty Lessons',
      value: 500,
    }
  ]

  return (
    <Box sx = {{backgroundColor: 'secondary.main'}}>
      <List teachers = {teachers}></List>  
    </Box>
    
  )
}

export default Home
