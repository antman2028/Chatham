import React from 'react'
import Navbar from '../components/Navbar'
import NewsContent from '../components/NewsContent'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'

const Article2 = () => {
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
        <Navbar size={windowSize.innerWidth}/> 
        <NewsContent
        title="Chatham Youth Vice President Antonio Salinas Awarded $40,000 Amazon Future Engineer Scholarship"
        imgName="Antonio"
        date="April 26, 2022"
        paragraphs= {["Chatham Youth Vice President Antonio Salinas was awarded the $40,000 Amazon Future Engineer Scholarship. He'll be joining Amazon as a software engineering intern next summer.", 
        "Antonio joined Chatham Youth as Chief Technology Officer in 2020, an integral part of our founding team. He is behind our digital presence to this day. Antonio assumed his current role as Vice President in 2021.",
        "Antonio plans to attend UNC-Chapel Hill, where he intends to graduate with a BS in Computer Science. After UNC, he hopes to work his way up to senior front-end developer at an NGO with global impact. Most importantly, as a mentor in his local community, Antonio hopes to inspire the next generation of Latinx software engineers.",
        "Antonio said, \"I am humbled and gratified to become an Amazon Future Engineer. Programming has been my passion since middle school. At Amazon, I hope to grow as a developer at the world's most consumer-centric company while continuing to give back to the communities I care about.\" Alexander Cook, Founder & President of Chatham Youth, added, \"I first met Antonio in middle school. I knew then what I know now: Antonio is a natural-born leader and problem-solver who would go on to be one of the best friends I've ever had. Amazon is only the beginning, and I could not be happier for him.\"",
      ]}
        />
        <Footer size={windowSize.innerWidth} />
    </>
  )
}

export default Article2