import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import '../navbar.css'

import NewCard from '../components/NewCard'

const News = () => {
  return (
    <>
      <Navbar />
      <PageTitle title="News"/>
      <NewCard/>
      <NewCard/>

    </>
  )
}

export default News