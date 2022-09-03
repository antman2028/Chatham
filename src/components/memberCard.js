import React from 'react'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'


const MemberCard = (props) => {
  return (
    <Box sx={{ display:'flex', alignItems:'center', justifyContent: 'center'}}>
      <Box sx={{
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        border: '3px solid #5064a9',
        minHeight:'5vh',
        minWidth: '900px',
        borderRadius:'15px',
        margin:'3px',
        cursor:'default'
      }}
      component={motion.div}
      whileHover={{ boxShadow:'0 0px 10px #000', backgroundColor:'#5064a9', color:'#f4f4e2'}}
      >
        <h2 className='members'>{props.name}</h2>
      </Box>
    </Box>
  )
}

export default MemberCard