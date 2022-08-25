import React from 'react'
import '../navbar.css'
import PageTitle from '../components/PageTitle'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from '../components/footer'
import { Button } from '@mui/material'
import { minHeight } from '@mui/system'


const FundPage = () => {

    const valuesGroupId = 'Values';
    const thing = () => ({
        showArrows: true,
        autoPlay: false,
        stopOnHover: true,
        thumbWidth: '200',
        showStatus: false,
        interval: Number('interval', 10000, {}, valuesGroupId),
    })

  return (
    <>
        <Navbar/>
        <Box
        sx={{
            display: 'flex',
            minHeight: '5vh',
            backgroundColor: '#f4f4e2',
        }}/>
        <Box 
        sx ={{
            display: 'flex',
            minHeight: '10vh',
            backgroundColor: '#f4f4e2',
            justifyContent: 'center',
        }}>
            <PageTitle title="Atkins Chatham Scholars Fund"/>
        
        </Box>
        <Box
        sx={{
            display: 'flex',
            minHeight: '7vh',
            backgroundColor: '#f4f4e2',
            justifyContent: 'center',
            alignItems: 'top',
            fontSize: '120%'
        }}>
            The #ByStudentsForStudents Scholarship
        </Box>

        <Carousel {...thing()}>
            
            <Box sx={{
                minHeight: '75vh',
                display: 'flex',
                background: '#f4f4e2',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <div className='Atkinswrapper'>
                <Box 
                sx={{
                    minWidth: '50%',
                    border: '3px solid orange',
                    minHeight: '20vh',
                }}
                className='atkin'
                />
                <Box sx={{
                    flexGrow:1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingLeft: '7vw',
                }}>
                    <h1 className='cardAtkins'>Simon Green Atkins</h1>
                    <p className='cardAtkins'>Simon Green Atkins (1863-1934) was an American educator from Chatham County who served as founding president of Winston-Salem State University, HBCU, and the North Carolina Negro Teachers’ Association. He was born into slavery and devoted his life to improving the health, housing, and economic status of our state’s African-American community.</p>
                    <Button variant='outlined' disabled={false}
                    sx={{
                    color: '#5064a9',
                    borderRadius: 0,
                    
                    '&:hover': {
                        backgroundColor: '#5064a9',
                        color: '#f4f4e2',
                    }
                    }}>
                    Donate Now</Button>
                </Box>
            </div>
            </Box>
            <Box sx={{
                minHeight: '75vh',
                display: 'flex',
                background: '#f4f4e2',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <div className='Atkinswrapper'>
                <Box 
                sx={{
                    minWidth: '50%',
                    border: '3px solid orange',
                    minHeight: '20vh',
                }}
                className='atkin'
                />
                <Box sx={{
                    flexGrow:1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingLeft: '7vw',
                }}>
                    <h1 className='cardAtkins'>Join the Fight</h1>
                    <p className='cardAtkins'>Chip in as little as $20 to sponsor a Chatham Scholar and send one needy Chathamite to the school of their dreams. It is only through our work that we can make college affordable for all.</p>
                    <Button variant='outlined' disabled={false}
                    sx={{
                    color: '#5064a9',
                    borderRadius: 0,
                    
                    '&:hover': {
                        backgroundColor: '#5064a9',
                        color: '#f4f4e2',
                    }
                    }}>
                    Donate Now</Button>
                </Box>
            </div>
            </Box>
            <Box sx={{
                minHeight: '75vh',
                display: 'flex',
                background: '#f4f4e2',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <div className='Atkinswrapper'>
                <Box 
                sx={{
                    minWidth: '50%',
                    border: '3px solid orange',
                    minHeight: '20vh',
                }}
                className='atkin'
                />
                <Box sx={{
                    flexGrow:1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingLeft: '7vw',
                }}>
                    <h1 className='cardAtkins'>Apply Now</h1>
                    <p className='cardAtkins'>ANY Chatham County Schools high school senior may apply, given three constraints: students must be pursuing a bachelor's degree, possess a GPA of 3.0+, and have a household income at or below $60,000. This special opportunity was made possible thanks to our partners at the Chatham Education Foundation.</p>
                    <Button variant='outlined' disabled={false}
                    sx={{
                    color: '#5064a9',
                    borderRadius: 0,
                    
                    '&:hover': {
                        backgroundColor: '#5064a9',
                        color: '#f4f4e2',
                    }
                    }}>
                    Donate Now</Button>
                </Box>
            </div>
            </Box>
        </Carousel>
        <Footer/>
    </>
  )
}

export default FundPage