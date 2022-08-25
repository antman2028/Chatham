import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Spacer from '../components/Spacer'
import '../navbar.css'


const Members = () => {
  const lst = [
    {
      Name: 'Antonio Salinas' 
    },
    {
      Name: 'Tony Sal'
    },
  ]

  lst.map(thing => console.log(thing.Name.split(' ')[0] + " " + thing.Name.split(' ')[1]))
  return (
    <>
      <Navbar/>
      <div className='flexbox-containermembers'>
        <PageTitle title="Members"/>
        <Spacer/>
        <Box
        >

        </Box>
      </div>
    </>
  )
}

export default Members