import React from 'react'
import '../navbar.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import {  motion } from 'framer-motion';
import ClearIcon from '@mui/icons-material/Clear';
import zIndex from '@mui/material/styles/zIndex'




const Newnav = (props) => {
    window.addEventListener('scroll', function(){
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0)
    })

    const [IsOpen, setOpen] = useState(false);

    const variants = {
        open: {visibility: 'visible', opacity:1, transition:{ duration: 0.25 } },
        closed: { visibility:'hidden',opacity:0, transition: { duration: 0.5 }},
        start: {opacity:0},
        FadeIn: {visibility:'visible', opacity: 1, scale: 1.5, transition:{ duration: 1 } },
        FadeIn2: {visibility:'visible', opacity: 1, scale: 1.5, transition:{ duration: 1.2 } }
      }

      const closing = () => {
        setOpen(false)
      }
      
      const opening = () => {
        setOpen(true)
      }
  return (
        <>
            { props.size > 1000 && 
                <>
                    <header id="resizeN">
                        <div className="logo">
                                    <Link to='/home'><img className='resize' src={require('./chathamyouthlogo.jpeg')}/></Link>
                        </div>
                        <div className="sitename"><span>Chatham Youth</span></div>
                        <ul>
                            <li><Link className="lin" to="/home">Home</Link></li>
                            <li><a className='lin' href='/home#about'>About</a></li>
                            <li><a className='lin' href='/home#serve'>Programs</a></li>
                            <li><Link className="lin" to='/members'>Members</Link></li>
                            <li><Link className="lin" to="/act">Act</Link></li>
                            <li><Link className="lin" to="/news">News</Link></li>
                            <li><Link className="lin" to="/leadership">Leadership</Link></li>
                        </ul>
                    </header>
                    <section className='banner'>
                    <div className='box'> 
                        <span id ="title" className='title'>Chatham Youth</span>
                        <p>Change for Chatham</p>
                    </div>
                    </section>
                </>
            }
            { props.size < 1000 && 
                <>
                <>
                    <header style={{position:'fixed', padding:"20px 15px", backgroundColor: 'transparent'}} className="again">
                      
                      <IconButton onClick={opening} size = 'large' sx={{backgroundColor:'#f4f4e2',borderRadius:'5px', boxShadow:'0 0px 4px #000', color:'#5064a9', zIndex:-1, marginLeft:'auto',
                                    '&:hover': {
                                        backgroundColor: '#5064a9',
                                        color: '#f4f4e2',
                                    }
                                    }}>
                          <MenuOutlinedIcon/>
                      </IconButton>
                    </header>
                    <motion.div style={{zIndex:100}} variants={variants} animate={IsOpen ? 'open' : 'closed'} className="NavOverlay">
                    <IconButton  onClick={closing} className='exit' size='large' sx={{backgroundColor:"#5064a9", color:'#f4f4e2'}}>
                              <ClearIcon />
                    </IconButton>
                        <Box className="MainPullout" sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                          <div className="logo">
                                  <Link to='/home'><img className='resize' src={require('./chathamyouthlogo.jpeg')}/></Link>
                          </div>
                          <h1>Chatham Youth</h1>
                              <motion.li onClick={closing} variants={variants} initial={'start'} animate={IsOpen ? 'FadeIn' : 'closed'} >
                                  <Link className="b" to="/home">Home</Link>
                              </motion.li>
                              <motion.li onClick={closing} variants={variants} initial={'start'} animate={IsOpen ? 'FadeIn' : 'closed'}>
                                <a className='b' href='/home#about'>About</a>
                              </motion.li>
                              <motion.li onClick={closing} variants={variants} initial={'start'} animate={IsOpen ? 'FadeIn' : 'closed'}>
                                <a className='b' href='/home#serve'>Programs</a>
                              </motion.li>
                              <motion.li variants={variants} initial={'start'} animate={IsOpen ? 'FadeIn' : 'closed'}>
                                <Link className="b" to="/members">Members</Link>
                              </motion.li>
                              <motion.li variants={variants} initial={'start'} animate={IsOpen ? 'FadeIn' : 'closed'}>
                                <Link className="b" to="/act">Act</Link>
                              </motion.li>
                              <motion.li variants={variants} initial={'start'} animate={IsOpen ? 'FadeIn' : 'closed'}>
                                <Link className="b" to="/news">News</Link>
                              </motion.li>
                              <motion.li variants={variants} initial={'start'} animate={IsOpen ? 'FadeIn' : 'closed'}>
                                <Link className="b" to="/leadership">Leadership</Link>
                              </motion.li>
                          </Box>
                      </motion.div>
    </> 
    
                    <section className='banner'>
                    <div className='box'> 
                        <span style={{fontSize:'5vh', textShadow:'0 5px 15px #000', fontWeight:'1000' }} className='title'>Chatham Youth</span>
                        <p>Change for Chatham</p>
                    </div>
                    </section>
                </>
            }
                

        </>

  )
}





export default Newnav