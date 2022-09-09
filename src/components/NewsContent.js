import React from 'react'
import '../navbar.css'
import Box from '@mui/material/Box'


const NewsContent = (props) => {
  return (
    <>
        <Box sx={{display:'flex', backgroundColor:'#f4f4e2', minHeight:'100vh', flexDirection:'column', alignItems:'center', textAlign: 'center'}}>
            <div className={`circle ${props.imgName}`}>
                <div className={props.imgName + 'A'}></div>
            </div>
            <Box className="NewsContentPhone"
            sx={{display:'flex',flexDirection:'column', maxWidth:'1000px', paddingBottom:'5vh'}}
            >
              <h1 className='NewsContent'>{props.title}</h1>
              <h4 className='NewsContent'>{props.date}</h4>
              {props.paragraphs.map(paragraph => (<p key={paragraph} className='NewsContent'>{paragraph}</p>))}
            </Box>
        </Box>
    </>
  )
}

export default NewsContent