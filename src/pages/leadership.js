import React from 'react'
import Navbar from '../components/Navbar'
import LeaderCard from '../components/LeaderCard'
import { Box } from '@mui/material'
import Spacer from '../components/Spacer'
import PageTitle from '../components/PageTitle'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'


const Leadership = () => {

  const [windowSize, setWindowSize] = useState(getWindowSize());
    
  useEffect(() => {
      function handleWindowResize() {
      setWindowSize(getWindowSize());
      }

      window.addEventListener('resize', handleWindowResize);

      return () => {
      window.removeEventListener('resize', handleWindowResize);

      };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  return (

    <>
      { windowSize.innerWidth > 1000 &&
      <>
      <Navbar size={windowSize.innerWidth}/>
      <PageTitle title="Leadership"/>
      <Box sx={{display: 'flex', justifyContent: 'space-around', paddingBottom: '2vh'}}>
      <LeaderCard
         firstName="Scott" 
         lastName="Oglesbee"
         position='President'
         linkedIn='https://www.linkedin.com/in/alexdcoo'
         email="mailto:sboglesbee@gmail.com"
         contact1='false'
         />
        <LeaderCard
         firstName="Ben" 
         lastName="Starling"
         position='Vice President'
         contact1='false'
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
         position='Content Manager'
         email='mailto:lilywitcher@gmail.com'
         contact1='false'
         />
        <LeaderCard 
        firstName="Gio"
        lastName='Cacciato'
        position='Fundraising Coordinator'
        email="mailto:gcacciato1@gmail.com"
        contact1='false'
        />
        <LeaderCard
        firstName="Revy"
        lastName="Gohden"
        position="Director, Atkins Scholarship Fund"
        email="mailto:revyjgo@gmail.com"
        contact1='false'
        />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-around', paddingBottom: '2vh'}}>
        <LeaderCard 
        firstName="Alexander"
        lastName="Cook"
        position="Mentor-Advisor"
        email="acook8@outlook.com"
        linkedIn="https://www.linkedin.com/in/alexdcoo"
        />
        <LeaderCard
        firstName="Antonio"
        lastName="Salinas"
        position="Mentor-Advisor"
        email="mailto:tonyjr1784@gmail.com"
        contact1='false'
        />
        <LeaderCard
         firstName="Sean" 
         lastName="Abenes"
         position='Director CCS Serves'
         email="mailto:streets@chatham.k12.nc.us"
         contact1='false'
         />
      </Box>
      <Footer size={windowSize.innerWidth}/>
      </>
      }
      { windowSize.innerWidth < 1000 &&
      <>
      <Navbar size={windowSize.innerWidth}/>
      <PageTitle title="Leadership"/>
      <Box sx={{display: 'flex', justifyContent: 'space-around', paddingBottom: '2vh'}}>
      
        <LeaderCard 
          firstName="Scott" 
          lastName="Oglesbee"
          position='President'
          linkedIn='https://www.linkedin.com/in/alexdcoo'
          email="mailto:sboglesbee@gmail.com"
          contact1='false'
          />
        <LeaderCard
         firstName="Ben" 
         lastName="Starling"
         position='Vice President'
         linkedIn=''
         contact1='false'
         />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-around', paddingBottom: '2vh'}}>
        <LeaderCard
         firstName="Lily-Kate" 
         lastName="Witcher"
         position='Content Manager'
         email='mailto:lilywitcher@gmail.com'
         contact1='false'
         />
        <LeaderCard
        firstName="Revy"
        lastName="Gohden"
        position="Director, Chatham Scholars"
        email="mailto:revyjgo@gmail.com"
        contact1='false'
        />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-around', paddingBottom: '2vh'}}>
      <LeaderCard 
        firstName="Gio"
        lastName='Cacciato'
        position='Fundraising Coordinator'
        email="mailto:gcacciato1@gmail.com"
        contact1='false'
        />
        <LeaderCard
        firstName="Antonio"
        lastName="Salinas"
        position="Mentor-Advisor"
        email="mailto:tonyjr1784@gmail.com"
        contact1='false'
        />
        
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-around', paddingBottom: '2vh'}}>
        <LeaderCard
         firstName="Dawn" 
         lastName="Streets"
         position='Community Advisor'
         email="mailto:streets@chatham.k12.nc.us"
          contact1='false'
         />
        <LeaderCard 
        firstName="Alexander"
        lastName="Cook"
        position="Mentor-Advisor"
        email="acook8@outlook.com"
        linkedIn="https://www.linkedin.com/in/alexdcoo"
        />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-around', paddingBottom: '2vh'}}>
        <LeaderCard
         firstName="Sean" 
         lastName="Abenes"
         position='Director CCS Serves'
         email="mailto:streets@chatham.k12.nc.us"
          contact1='false'
         />
        
      </Box>
      <Footer size={windowSize.innerWidth}/>
      </>
      }
    </>
  )
}

export default Leadership