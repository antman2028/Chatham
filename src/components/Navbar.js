import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css'
import { duration, IconButton } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import ClearIcon from '@mui/icons-material/Clear';
import { animate, motion } from 'framer-motion';
import PageTitle from '../components/PageTitle'
import { Box } from '@mui/material'



const Navbar = (props) => {

  const [IsOpen, setOpen] = useState(false);

  const variants = {
    open: {visibility: 'visible', opacity:1, transition:{ ease:"easeOut", duration: 0.3 } },
    closed: { opacity:0, visibility:'hidden', transition: { duration: 0.5 }},
    start: {opacity:0},
    FadeIn: {visibility:'visible', opacity: 1, scale: 1.5, transition:{ duration: 1 } },
    FadeIn2: {visibility:'visible', opacity: 1, scale: 1.5, transition:{ duration: 1.2 } }
  }

  window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})

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
        <header className="again">
            <div className="logo">
                    <Link to='/home'><img className='resize' src={require('./chathamyouthlogo.jpeg')}/></Link>
            </div>
            <div className="site"><span>Chatham Youth</span></div>
            <ul>
                <li><Link className="an" to="/home">Home</Link></li>
                <li><Link className="an" to="/home">About</Link></li>
                <li><Link className="an" to="/home">Programs</Link></li>
                <li><Link className="an" to="/members">Members</Link></li>
                <li><Link className="an" to="/act">Act</Link></li>
                <li><Link className="an" to="/news">News</Link></li>
                <li><Link className="an" to="/leadership">Leadership</Link></li>
            </ul>
        </header>
        <section className='void'></section>
    </>
    }
    { props.size < 1000 && 
    <>
      <header style={{position:'static', padding:"20px 15px"}} className="again">
        <div className="logo">
                                    <Link to='/home'><img className='resize' src={require('./chathamyouthlogo.jpeg')}/></Link>
        </div>
        <IconButton onClick={opening} size = 'large' sx={{backgroundColor:'#f4f4e2',borderRadius:'5px', boxShadow:'0 0px 4px #000', color:'#5064a9', marginLeft:'auto',
                      '&:hover': {
                          backgroundColor: '#5064a9',
                          color: '#f4f4e2',
                      }
                      }}>
            <MenuOutlinedIcon/>
        </IconButton>
        
       </header>
       <motion.div variants={variants} animate={IsOpen ? 'open' : 'closed'} className="NavOverlay">
       <IconButton  onClick={closing} className='exit' size='large' sx={{backgroundColor:"#5064a9", color:'#f4f4e2'}}>
                <ClearIcon />
       </IconButton>
          <Box className="MainPullout" sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <div className="logo">
                    <Link to='/home'><img className='resize' src={require('./chathamyouthlogo.jpeg')}/></Link>
            </div>
            <h1>Chatham Youth</h1>
                <motion.li variants={variants} initial={'start'} animate={IsOpen ? 'FadeIn' : 'closed'} >
                    <Link className="b" to="/home">Home</Link>
                </motion.li>
                <motion.li variants={variants} initial={'start'} animate={IsOpen ? 'FadeIn2' : 'closed'}>
                  <Link className="b" to="/home">About</Link>
                </motion.li>
                <motion.li variants={variants} initial={'start'} animate={IsOpen ? 'FadeIn' : 'closed'}>
                  <Link className="b" to="/home">Programs</Link>
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
    
    }
    </>
    
  );
};

export default Navbar;
