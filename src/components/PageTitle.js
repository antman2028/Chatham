import React from 'react'
import '../navbar.css'


const PageTitle = (props) => {
  return (
    <div className='flexbox-container'>
        <div className='page-title'>{props.title}</div>
    </div>
  )
}

export default PageTitle