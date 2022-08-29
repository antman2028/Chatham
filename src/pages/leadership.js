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
      <LeaderCard
         firstName="Scott" 
         lastName="Oglesbee"
         position='President'
         linkedIn='https://www.linkedin.com/in/alexdcoo'
         email="mailto:sboglesbee@gmail.com"
         />
        <LeaderCard
         firstName="Ben" 
         lastName="Starling"
         position='Vice President'
         linkedIn=''
         />
        <LeaderCard
         firstName="Dawn" 
         lastName="Streets"
         position='Community Advisor'
         email="mailto:streets@chatham.k12.nc.us"
          contact1='false'
         />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-around', paddingBottom: '2vh'}}>
        <LeaderCard
         firstName="Lily-Kate" 
         lastName="Witcher"
         position='Executive Assistant'
         email='mailto:lilywitcher@gmail.com'
         contact1='false'
         />
        <LeaderCard 
        firstName="Gio"
        lastName='Cacciato'
        position='Director, Atkins Fund'
        email="mailto:gcacciato1@gmail.com"
        contact1='false'
        />
        <LeaderCard
        firstName="Revy"
        lastName="Gohden"
        position="Director, Chatham Scholars"
        email="mailto:revyjgo@gmail.com"
        />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-around', paddingBottom: '2vh'}}>
        <LeaderCard 
        firstName="Alexander"
        lastName="Cook"
        position="Advisor"
        email="acook8@outlook.com"
        linkedIn="https://www.linkedin.com/in/alexdcoo"
        />
        <LeaderCard
        firstName="Antonio"
        lastName="Salinas"
        position="Advisor"
        email="mailto:tonyjr1784@gmail.com"
        />
        
      </Box>
      <Footer/>
    </>
  )
}

export default Leadership