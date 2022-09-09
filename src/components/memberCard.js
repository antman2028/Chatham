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
        minHeight:'5vh',
        borderRadius:'15px',
        margin:'3px',
        cursor:'default',
        paddingLeft: '5px',
        paddingRight: '5px'
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