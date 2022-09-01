import React from 'react'
import '../navbar.css'
import Box from '@mui/material/Box'
import Newnav from '../components/Newnav'
import Spacer from '../components/Spacer'
import PageTitle from '../components/PageTitle'
import Textbox from '../components/textbox'
import { Link } from 'react-router-dom'
import { Button, IconButton } from '@mui/material'
import { motion } from 'framer-motion'
import Footer from '../components/footer'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Home = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const buttonVariants = {
  thing:{
    y:10,
    
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    }
  }
}
  return (
    <>
      <Newnav/>
      <Box sx={{justifyContent:'center', alignItems:'center', textAlign:'center', margin:0, padding:0, translate:'0 -2vh',
      zIndex:99
    }}>
        <IconButton sx={{translate:'0 -1vh'}} component={motion.div}
        initial={{scale:2.5}}
        variants={buttonVariants}
        animate='thing'
        
        >
          <a href='#about'><ArrowDownwardIcon fontSize='large' className="white"/></a>
        </IconButton>
      </Box>
      <div id="about"/>
      <Spacer/>
      <div className='flexbox-container'>
        <Box sx={{
          display: 'flex',
          flexGrow: 1,
          minHeight: '65vh',
        }}>
          <Box sx={{
            flexGrow:1,
            display: 'flex',
            backgroundColor:'#5064a9',
            maxWidth: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
            <h1 className='card1Home'>About</h1>
            <p className='card1Home'>At Chatham Youth, our mission is to make youth voices heard from every corner of our county. Today, we're over 150 members strong and hard at work. Through the Atkins Chatham Scholars Fund, CCS Serves, and so much more, we're changing Chatham County, one initiative at a time.</p>
            <Button variant='outlined' disabled={false}
                    sx={{
                    color: '#f4f4e2',
                    borderRadius: 0,
                    borderColor: '#fff',
                    '&:hover': {
                        backgroundColor: '#fff',
                        color: '#5064a9',
                    }
                    }}>
                      Our Story
                    </Button>
          </Box>
          <Box sx={{
            flexGrow:1,
            backgroundColor:'orange',
          }}
          className='chatham'
          />
        </Box>
      </div>
      <div id="serve"/>
      <Spacer/>
      <PageTitle title='The Ways We Serve'/>
      <div className='flexbox-container'> 
        <Box sx={{
          display: 'flex',
          flexGrow: 1,
          minHeight: '45vh',
          maxWidth: '1500px',
        }}>
          <Box sx={{
            display: 'flex',
            flexGrow:1,
            backgroundColor:'#f4f4e2',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            maxWidth: '50%',
          }}>
           <h1 className='card2Home'> Atkins Chatham Scholars Fund </h1>
           <p className='card2Home'>The #ByStudentsForStudents Scholarship </p>
           <Button variant='outlined' disabled={false}
                    sx={{
                    color: '#5064a9',
                    borderRadius: 0,
                    
                    '&:hover': {
                        backgroundColor: '#5064a9',
                        color: '#f4f4e2',
                    }
                    }}>
                    <Link className="opposite" to='/AtkinsScholarFund'>Learn More</Link>
                    </Button>
          </Box>
          <Box sx={{
            flexGrow: 1,
            backgroundColor: 'orange',
          }}
          className='scholar'
          />
        </Box>
        </div>
      <Box sx={{
        display: 'flex',
        minHeight: '5vh',
      }}/>
      <div id='middle'/>
      <div className='flexbox-container'>
        <Box sx={{
          display: 'flex',
          flexGrow: 1,
          minHeight: '45vh',
          maxWidth: '1500px'
        }}>
          <Box sx={{
            flexGrow:1,
            backgroundColor:'#f4f4e2',
            display: 'flex',
            maxWidth: '50%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <h1 className='card2Home'> CCS Serves </h1>
            <p className='card2Home'>Chatham County Schools' Community Service Hub</p>
            <Button variant='outlined' disabled={false}
                    sx={{
                    color: '#5064a9',
                    borderRadius: 0,
                    
                    '&:hover': {
                        backgroundColor: '#5064a9',
                        color: '#f4f4e2',
                    }
                    }}>
                      Sign Up
              </Button>
          </Box>
          <Box sx={{
            flexGrow:1,
            backgroundColor:'orange',
          }}
          className='town'
          />
        
        </Box>
        </div>
      <Box sx={{display:'flex', minHeight:'10vh'}}/>
      <section className='oldmanpic'>
        <Textbox 
        title='" We make a living by what we get, but we make a life by what we give"' 
        contents='Winston Churchill' 
        buttonTrue={false} 
        buttonContents="click me"

        />
      </section>
      <Footer/>
    </>
  )
}

export default Home
