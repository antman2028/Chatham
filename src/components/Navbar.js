import React from "react";
import { Link } from "react-router-dom";
import '../App.css'



const Navbar = () => {

  window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})
  return (
    <>
        <header className="again">
            <div className="logo">
                    <Link to='/tester'><img className='resize' src={require('./chathamyouthlogo.jpeg')}/></Link>
            </div>
            <div className="site"><span>Chatham<span>Youth</span></span></div>
            <ul>
                <li><Link className="an" to="/home">Home</Link></li>
                <li><Link className="an" to="/home">About</Link></li>
                <li><Link className="an" to="/home">Programs</Link></li>
                <li><Link className="an" to="/members">Members</Link></li>
                <li><Link className="an" to="/act">Act</Link></li>
                <li><Link className="an" to="/news">News</Link></li>
                <li><Link className="an" to="/leadership">Leadership</Link></li>
            </ul>
        </header>
        <section className='void'></section>
    </>
  );
};

export default Navbar;
