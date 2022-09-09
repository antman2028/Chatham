import Box from '@mui/material/Box'
import { minHeight } from '@mui/system'
import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Spacer from '../components/Spacer'
import '../navbar.css'
import { Button } from '@mui/material'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'

const Act = () => {

  const [windowSize, setWindowSize] = useState(getWindowSize());
    
    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);

        };
    }, []);

    function getWindowSize() {
      const {innerWidth, innerHeight} = window;
      return {innerWidth, innerHeight};
    }
  return (
    <>
    { windowSize.innerWidth > 1000 && 
    <>
    <Navbar size={windowSize.innerWidth}/>
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
        <Button variant='outlined' disabled={false}
                  sx={{
                  color: '#5064a9',
                  borderRadius: 0,
                  borderColor:"#5064a9",
                  '&:hover': {
                      backgroundColor: '#5064a9',
                      color: '#f4f4e2',
                  }
                  }}>
                  <a className='opposite' href="">Donate Now</a>
                  </Button>
      </Box>
      <Box sx={{
        flexGrow: 1,
        backgroundColor: 'orange',
      }}
      className='Lightbulb'
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
        <Button variant='outlined' disabled={false}
                  sx={{
                  color: '#5064a9',
                  borderRadius: 0,
                  borderColor:"#5064a9",
                  '&:hover': {
                      backgroundColor: '#5064a9',
                      color: '#f4f4e2',
                  }
                  }}>
                  <a className='opposite' href="">Volunteer Today</a>
                  </Button>
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
        <Button variant='outlined' disabled={false}
                  sx={{
                  color: '#5064a9',
                  borderRadius: 0,
                  borderColor:"#5064a9",
                  '&:hover': {
                      backgroundColor: '#5064a9',
                      color: '#f4f4e2',
                  }
                  }}>
                  <a className='opposite' href="">Contact Us</a>
                  </Button>
      </Box>
    </div>
    <Footer size={windowSize.innerWidth}/>
    </>
    }
    { windowSize.innerWidth < 1000 && 
    <>
    <Navbar size={windowSize.innerWidth}/>
    <PageTitle title="Get Involved"/>
    <Box sx={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <p className='card1Act'>Together, There's Nothing We Can't Do</p>
    </Box>
    <Spacer/>
    <div className='flexbox-container hands'>
      
      <Box sx={{
        flexGrow: 1,
        minHeight: '40vh',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '70%',
        margin:'10px',
        padding:'5px',
        color:'white'
      }}>
        <h1 style={{color:'white'}} className='card2Act'>Sponsor a Chatham Scholar</h1>
        <p className='card2Act'>Chip in as little as $20 to the Atkins Chatham Scholars Fund, and send one needy Chathamite to the school of their dreams.</p>
        <Button variant='contained' disabled={false}
                  sx={{
                  backgroundColor: '#5064a9',
                  borderRadius: 0,
                  }}>
                  <a style={{color:'white'}} href="">Donate Now</a>
                  </Button>
      </Box>
      
    </div>
    <div className='flexbox-container cover-thing'>
    <Box sx={{
        minHeight: '40vh',
        flexGrow: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '70%',
        margin:'10px',
        padding:'5px',
        color:'white'
      }}>
        <h1 style={{color:'white'}} className='card2Act'>Volunteer Your Time</h1>
        <p className='card2Act'>Volunteer anywhere, anytime in Chatham with CCS Serves.</p>
        <Button variant='outlined' disabled={false}
                  sx={{
                    backgroundColor: '#5064a9',
                    borderRadius: 0,
                    }}>
                  <a style={{color:'white'}} href="">Volunteer Today</a>
                  </Button>
      </Box>
      
    </div>
    <div className='flexbox-container Lightbulb'>
    
    <Box sx={{
        minHeight: '40vh',
        flexGrow: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '70%',
        color:'white',
        margin:'10px',
        padding:'5px'
      }}>
        <h1 style={{color:'white'}} className='card2Act'>Get in Touch</h1>
        <p className='card2Act'>What ideas and feedback do you have? Leave a message and we'll get back to you.</p>
        <Button variant='outlined' disabled={false}
                  sx={{
                    backgroundColor: '#5064a9',
                    borderRadius: 0,
                    }}>
                  <a style={{color:'white'}} href="">Contact Us</a>
                  </Button>
    </Box>
    </div>
    <Footer size={windowSize.innerWidth}/>
    </>
    }
    </>
  )
}

export default Act