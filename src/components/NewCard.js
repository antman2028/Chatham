import React from 'react'
import '../navbar.css'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'

const NewCard = (props) => {
    const d = props.desription

  return (
    <>
        <div className='flexbox-container'> 
            <Box sx={{
            display: 'flex',
            flexGrow: 1,
            minHeight: '60vh',
            maxWidth: '1800px',
            paddingBottom:"2vh",
            }}>

            <Box sx={{
                display: 'flex',
                flexGrow:1,
                backgroundColor:'#f4f4e2',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                maxWidth: '50%',
            }}>
                <Box sx={{
                flexGrow:1,
                display: 'flex',
                maxWidth: '600px',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <div className='flex-container' style={{maxWidth:'75%'}}>
                    <h1 className='NewCard'>{props.title}</h1>
                    <h4 className='NewCard'>{props.date}</h4>
                    <p className='NewCard'>{props.desription}</p>
                    <Button variant='outlined' disabled={false}
                            sx={{
                            color: '#5064a9',
                            borderRadius: 0,
                            overflow: 'auto',
                            '&:hover': {
                                backgroundColor: '#5064a9',
                                color: '#f4f4e2',
                            }
                            }}>
                            <a href={props.link}>{props.buttonLabel}</a>
                    </Button>
                </div>
                </Box>
            </Box>
            <Box sx={{
                display:'flex',
                flexGrow: 1,
                backgroundColor: 'orange',
            }}
            className={props.imgName}
            />
            </Box>
        </div>
        
    </>
  )
}

export default NewCard