import { Box, Button, IconButton } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import '../navbar.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));


const LeaderCard = (props) => {
  return (
    <>
        <Box 
        sx={{ display: 'flex', 
        flexGrow: 1,
        flexDirection: 'column', 
        minHeight: '70vh',
        padding: '5px', 
        maxWidth: '50vw'
        }}>
            <Box className='controlImg' sx={{flexGrow: 3, backgroundColor: 'orange', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', backgroundImage:`url(${images[`${props.firstName}.jpg`]})`}}>
            </Box>
            <Box sx={{flexGrow: 1, backgroundColor: '#f4f4e2', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', maxHeight:'35%'}}>
                <h1 className='leaderCard'>{props.firstName + " " + props.lastName}</h1>
                <p className='leaderCardp'>{props.position}</p>
                <Box 
                sx={{display:"flex", justifyContent: "center", width: '100%'}}>
                  <IconButton disabled={props.contact1} size='large' href={props.linkedIn} sx={{color: '#0a66c2',
                  '&:hover': {
                        backgroundColor: '#0a66c2',
                        color: '#f4f4e2',
                    }}}>
                    <LinkedInIcon fontSize='large' color='#0a66c2'/>
                  </IconButton>
                  <IconButton disabled={props.contact2} size='large' href={props.email} sx={{color: '#0a66c2',
                  '&:hover': {
                    backgroundColor: '#0a66c2',
                    color: '#f4f4e2',
                }}}>
                    <EmailIcon fontSize='large' color='#0a66c2'/>
                  </IconButton>
                </Box>
            </Box>
        </Box>
        
    </>
  )
}

export default LeaderCard