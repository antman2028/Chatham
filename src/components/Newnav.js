import React from 'react'
import '../navbar.css'
import { Link } from 'react-router-dom'

const Newnav = () => {
    window.addEventListener('scroll', function(){
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0)
    })

  return (
    <>
        <header>
            <div className="logo">
                    <Link to='/home'><img className='resize' src={require('./chathamyouthlogo.jpeg')}/></Link>
            </div>
            <div className="sitename"><span>Chatham<span>Youth</span></span></div>
            <ul>
                <li><Link className="lin" to="/home">Home</Link></li>
                <li><a className='lin' href='#about'>About</a></li>
                <li><a className='lin' href='#serve'>Programs</a></li>
                <li><Link className="lin" to='/members'>Members</Link></li>
                <li><Link className="lin" to="/act">Act</Link></li>
                <li><Link className="lin" to="/news">News</Link></li>
                <li><Link className="lin" to="/leadership">Leadership</Link></li>
            </ul>
        </header>
        <section className='banner'>
            <div className='box'> 
                <span className='title'><span>Chatham Youth</span></span>
                <p>Change for Chatham</p>
            </div>
        </section>
    </>
  )
}

export default Newnav