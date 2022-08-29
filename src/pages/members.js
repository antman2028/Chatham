import React from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import '../navbar.css'
import MemberCard from '../components/memberCard'
import Footer from '../components/footer'
import querySnapshot from '../firebase'
import final from '../firebase'

const Members = () => {
  const num = 0;
  console.log(final)
  return (
    <>
      <Navbar/>
      <div className='flexbox-containermembers'>
        <PageTitle title="Members"/>
        {final.map(user => (<MemberCard key={user.id} name={user.FirstName}/>))}
        {final.forEach(data => (console.log(data)))}
      </div>
      
      <Footer/>
    </>
  )
}

export default Members