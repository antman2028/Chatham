import React from 'react'
import '../navbar.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'


const Newnav = (props) => {
    window.addEventListener('scroll', function(){
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0)
    })




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
                            <li><a className='lin' href='#about'>About</a></li>
                            <li><a className='lin' href='#serve'>Programs</a></li>
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
                    <div className='header2' id="resizeN" >
                        <IconButton size = 'large' sx={{backgroundColor:'white',borderRadius:'5px', boxShadow:'0 0px 4px #000',
                    '&:hover': {
                        backgroundColor: '#0a66c2',
                        color: '#f4f4e2',
                    }
                    }}>
                            <MenuOutlinedIcon/>
                        </IconButton>
                    </div>
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