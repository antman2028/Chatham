import React from 'react'
import '../navbar.css'
import { Button } from '@mui/material/'


const Textbox = (props) => {
    

    return (
    <>
        <div className='aBox'>
          <h1>{props.title}</h1>
          <p>{props.contents}</p>
          { props.buttonTrue &&
            <Button 
            variant='contained'
            sx = {{
                borderRadius: 0,
            }}
            ><a href={props.link}>{props.buttonContents}</a></Button>
          }
         </div>
    </>
  )
}

export default Textbox