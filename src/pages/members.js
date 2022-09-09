import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import '../navbar.css'
import MemberCard from '../components/memberCard'
import Footer from '../components/footer'
import lst1 from '../firebase'
import { getDocs, onSnapshot } from 'firebase/firestore'



const Members = () => {

  const [Users, setUsers] = useState([])

  useEffect(() => {
    getDocs(lst1)
      .then((snapshot) => {
        let temp = []
        snapshot.docs.forEach((doc) => {
          temp.push({...doc.data(), id: doc.id})
        })
        setUsers(temp)
      })
  },[])


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
      <div className='flexbox-containermembers'>
        <PageTitle title="Members"/>
        {Users.map(name => (<MemberCard key={name.id} name={name.FirstName +" " + name.LastName}/>))}
      </div>
      
      <Footer size={windowSize.innerWidth}/>
    </>
  )
}

export default Members