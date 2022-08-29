import React from 'react'
import '../navbar.css'
import { Box } from '@mui/material'

const Footer = () => {
  return (
    <>
        <Box
        sx = {{
            display: 'flex',
            backgroundColor: '#2a3457',
            minHeight: '12vh',
            justifyContent: 'center',
            alignItems: 'end',
            color: 'white',
            textDecoration: 'none',
        }}
         >
            <p>©2022 by Chatham Youth NC | </p>
            <p><a className='footer' href='https://www.termsfeed.com/live/280899d3-8ee6-47c0-a5aa-fa420c9d06d2'>Privacy Policy |</a></p>
            <p><a className='footer' href='https://www.termsfeed.com/live/94bcfa70-7432-4b32-91fb-d741628768ac'>Terms of Service | </a></p>
            <p><a className='footer' href=''>Site by Antonio Salinas</a></p>
        </Box>
    </>
  )
}

export default Footer