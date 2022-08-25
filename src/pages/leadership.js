import React from 'react'
import Navbar from '../components/Navbar'
import LeaderCard from '../components/LeaderCard'
import { Box } from '@mui/material'
import Spacer from '../components/Spacer'
import PageTitle from '../components/PageTitle'
import Footer from '../components/footer'


const Leadership = () => {
  return (
    <>
      <Navbar />
      <PageTitle title="Leadership"/>
      <Box sx={{display: 'flex', justifyContent: 'space-around', paddingBottom: '2vh'}}>
        <LeaderCard />
        <LeaderCard/>
        <LeaderCard/>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-around', paddingBottom: '2vh'}}>
        <LeaderCard
         firstName="Antonio" 
         lastName="Salinas"
         position='Advisor'
         linkedIn='https://www.linkedin.com/in/alexdcoo'
         />
        <LeaderCard 
        firstName="Gio"
        lastName='Cacciato'
        position='Director of Atkins Fund'
        />
        <LeaderCard
        firstName="Patrick"
        lastName="Mccaw"
        position="Advisor"
        linkedIn="https://www.linkedin.com/in/alexdcoo"
        />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-around', paddingBottom: '2vh'}}>
        <LeaderCard 
        firstName="Alexander"
        lastName="Cook"
        />
        <LeaderCard/>
        <LeaderCard/>
      </Box>
      <Footer/>
    </>
  )
}

export default Leadership