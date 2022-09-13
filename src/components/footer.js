import React, { useState } from 'react'
import '../navbar.css'
import { Box } from '@mui/material'

const Footer = (props) => {
  let fonting = '1.5vh'
  if (props.size < 1000){
    fonting = '1vh'
  }
  return (
    <>
        <Box
        sx = {{
            display: 'flex',
            backgroundColor: '#f4f4e2',
            minHeight: '12vh',
            justifyContent: 'center',
            alignItems: 'end',
            color: '#5064a9',
            textDecoration: 'none',
            fontSize: fonting,
            fontWeight: '1000'
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