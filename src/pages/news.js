import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import '../navbar.css'
import Footer from '../components/footer'
import NewCard from '../components/NewCard'
import { useState, useEffect } from 'react'

const News = () => {

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

const buttonVariants = {
  thing:{
    y:10,
    
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    }
  }
}
  return (
    <>
      <Navbar size={windowSize.innerWidth}/>
      <PageTitle title="News"/>
      <NewCard
      title="Atkins Chatham Scholars Fund Co-Founder Patrick McCaw Tapped for Prestigious Jane Street AMP Program"
      date="May 25, 2022"
      desription="If you can make it in New York, you can make it anywhere. This summer, Patrick McCaw will spend five weeks in NYC, learning about probability, statistics, computer programming, data analysis, game theory, and more. That's on top of a $5,000 scholarship."
      buttonLabel="Read The Article"
      imgName="Patrick"
      />
      <NewCard
      title="Chatham Youth Vice President Antonio Salinas Awarded $40,000 Amazon Future Engineer Scholarship"
      date="April 26, 2022"
      desription="Chatham Youth's own Antonio Salinas was awarded the $40,000 Amazon Future Engineer Scholarship. He'll be joining Amazon as a software engineering intern next summer."
      buttonLabel="Read The Article"
      imgName="chatham"
      />
      <NewCard
      title="Chatham Youth and CEF Award $2,000 to JM's Michael Rodriguez"
      date="May 17, 2021"
      desription="Chatham Youth and CEF awarded the inaugural Atkins Chatham Scholars Fund to Jordan Matthews's own Michael Rodriguez."
      buttonLabel="Read The Article"
      imgName="JM"
      />
      <NewCard
      title="CN+R: Chatham Youth and CEF fundraise for full-ride scholarship for CCS student"
      date="Mar 10, 2021"
      desription="By students, for students.

      ​
      
      That’s the banner of the Atkins Chatham Scholar Fund, a scholarship partnership between Chatham Education Foundation and Chatham Youth with the mission of sending “one needy Chathamite to the school of their dreams.”"
      buttonLabel="Read The Article"
      imgName="Flyer"
      />
      <NewCard
      title="CCS's John McCann Interviews Chatham Youth Founder & Pres. Alexander Cook"
      date="Feb 3, 2021"
      desription="Chatham Youth Founder & President Alexander Cook shares the Chatham Youth story and how students like him are fighting for Chatham County's future."
      buttonLabel="Watch the Video"
      imgName="VO"
      />
      <Footer size={windowSize.innerWidth}/>
    </>
  )
}

export default News