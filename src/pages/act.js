import Box from '@mui/material/Box'
import { minHeight } from '@mui/system'
import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Spacer from '../components/Spacer'
import '../navbar.css'
import { Button } from '@mui/material'
import Footer from '../components/footer'

const Act = () => {
  return (
    <>
      <Navbar />
      <PageTitle title="Get Involved"/>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <p className='card1Act'>Together, There's Nothing We Can't Do</p>
      </Box>
      <Spacer/>
      <div className='flexbox-container'>
        <Box sx={{
          flexGrow: 1,
          backgroundColor: 'orange',
          minHeight: '40vh',
        }}
        className='hands'
        />
        <Box sx={{
          flexGrow: 1,
          backgroundColor: '#f4f4e2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '33%'
        }}>
          <h1 className='card2Act'>Sponsor a Chatham Scholar</h1>
          <p className='card2Act'>Chip in as little as $20 to the Atkins Chatham Scholars Fund, and send one needy Chathamite to the school of their dreams.</p>
          <Button variant='outlined'
            sx={{
              borderRadius: '0px',
            }}
            > Donate Now</Button>
        </Box>
        <Box sx={{
          flexGrow: 1,
          backgroundColor: 'orange',
        }}
        className='light'
        />
      </div>
      <div className='flexbox-container'>
      <Box sx={{
          minHeight: '40vh',
          flexGrow: 1,
          backgroundColor: '#f4f4e2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '33%'
        }}>
          <h1 className='card2Act'>Volunteer Your Time</h1>
          <p className='card2Act'>Volunteer anywhere, anytime in Chatham with CCS Serves.</p>
          <Button variant='outlined'
            sx={{
              borderRadius: '0px',
            }}
            > Volunteer Today</Button>
        </Box>
        <Box sx={{
          flexGrow: 1,
          backgroundColor: 'orange',
        }}
        className='cover-thing'
        />
        <Box sx={{
          minHeight: '40vh',
          flexGrow: 1,
          backgroundColor: '#f4f4e2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '33%'
        }}>
          <h1 className='card2Act'>Get in Touch</h1>
          <p className='card2Act'>What ideas and feedback do you have? Leave a message and we'll get back to you.</p>
          <Button variant='outlined'
            sx={{
              borderRadius: '0px',
            }}
            > Contact Us</Button>
        </Box>
      </div>
      <Footer/>
    </>
  )
}

export default Act