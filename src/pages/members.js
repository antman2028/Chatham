import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import '../navbar.css'
import MemberCard from '../components/memberCard'
import Footer from '../components/footer'
import lst1 from '../firebase'
import { getDocs, addDoc, query, orderBy, limit} from 'firebase/firestore'
import { Button, TextField } from '@mui/material'



const Members = () => {

  const [Users, setUsers] = useState([])

  const q = query(lst1, orderBy('LastName'), limit(200));


  useEffect(() => {
    getDocs(q)
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