import React from 'react'
import Navbar from '../components/Navbar'
import NewsContent from '../components/NewsContent'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'

const Article3 = () => {
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
        title="Chatham Youth and CEF Award $2,000 to JM's Michael Rodriguez"
        imgName="JM"
        date="May 17, 2021"
        paragraphs= {["Chatham Youth and the Chatham Education Foundation today announced the awarding of the inaugural #ByStudentsForStudents Atkins Chatham Scholars Fund to Jordan Matthews's own Michael Rodriguez. Michael came to the United States from Honduras with nothing but the clothes on his back, not even knowing the language. Now, having graduated at the top of his class, he is majoring in physics at UNC Charlotte. Chatham Youth Founder & President Alexander Cook said, \"It took hundreds of emails and phone calls, but we rounded out one of the most challenging fundraising years on record with $2,000 in contributions. We are humbled and gratified to help Michael's college dreams come true, and we are sure he is the first of many Atkins Chatham Scholars Fund recipients to come. A special thank-you goes out to all our donors and supporters for making today possible. You helped make history in Chatham County.\""
      ]}
        />
        <Footer size={windowSize.innerWidth} />
    </>
  )
}

export default Article3