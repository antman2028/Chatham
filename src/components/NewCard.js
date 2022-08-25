import React from 'react'
import '../navbar.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'

const NewCard = (props) => {
  return (
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
        <Box sx={{display:'flex', flexGrow:1, flexDirection: 'column',justifyContent:'center', border: '3px solid black', alignItems:'flex-start'}}>
            <h1 className='NewCard'> Atkins Chatham Scholars Fund </h1>
            <h4>A Date</h4>
            <p className='NewCard'>The #ByStudentsForStudents Scholarship </p>
            
        </Box>
           <Button variant='outlined' disabled={false}
                    sx={{
                    color: '#5064a9',
                    borderRadius: 0,
                    translate: '0 -15vh',
                    '&:hover': {
                        backgroundColor: '#5064a9',
                        color: '#f4f4e2',
                    }
                    }}>
                    <Link className='opposite' to='/AtkinsScholarFund'>Read the  Article</Link>
              </Button>
          </Box>
          <Box sx={{
            flexGrow: 1,
            backgroundColor: 'orange',
          }}
          className={props.imgName}
          />
        </Box>
      </div>
  )
}

export default NewCard