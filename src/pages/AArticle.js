import React from 'react'
import Navbar from '../components/Navbar'
import NewsContent from '../components/NewsContent'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'

const AArticle = () => {
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
        title="Atkins Chatham Scholars Fund Co-Founder Patrick McCaw Tapped for Prestigious Jane Street AMP Program"
        imgName="Patrick"
        date="May 25, 2022"
        paragraphs= {["If you can make it in New York, you can make it anywhere.", 
        "This summer, Atkins Chatham Scholars Fund Co-Founder Patrick McCaw will spend five weeks in the city that never sleeps, learning about probability, statistics, computer programming, data analysis, game theory, and more. That's on top of a $5,000 scholarship from the Jane Street Academy of Math and Programming (AMP).",
        "Jane Street is one of the world's premier market-makers and high-frequency trading firms, having created $17 trillion of liquidity in 2020 alone. According to Jane Street, 'Summer days at AMP are rigorous and rewarding—full of lectures, problem solving, and games playing, guided by excellent instructors and teaching assistants.'",
        "Without Patrick, the Atkins Chatham Scholars Fund — and Chatham Youth itself — would have never been possible. He was instrumental in architecting Chatham Youth's founding vision and putting a #ByStudentsForStudents scholarship front and center. Patrick will be attending UNC-Chapel Hill this fall, where he plans to major in Physics or Applied Math.",
        "Chatham Youth Founder & President Alexander Cook said, 'Patrick and I have been best friends since the first grade, so I could say this comes as a surprise, but that wouldn't be true. He's a fast learner, strategic thinker, expert problem-solver, and valedictorian to show for it. Nobody deserves it more.'"
      ]}
        />
        <Footer size={windowSize.innerWidth} />
    </>
  )
}

export default AArticle