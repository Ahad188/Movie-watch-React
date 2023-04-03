 import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import Side from '../SideCard/Side';
 import './Display.css'
 const Display = () => {
     const [cards,setcards]= useState([]);
     // console.log(cards)
     useEffect(()=>{
          fetch('data.json')
          .then(res=>res.json())
          .then(data=>setcards(data))
     },[])
      const [watchTime, setWatchTime] = useState('');
      console.log(watchTime)
      
     const handelWatchTime =(time)=>{
          const previesTime = JSON.parse(localStorage.getItem('watch'))
          if(previesTime){
               const sum = previesTime + time;
               localStorage.setItem('watch',sum)
               setWatchTime(sum)
          }else{
               localStorage.setItem('watch',time)
               setWatchTime(time)
          }
     }
      
 
     return (
          <div className='parent'>
               <div className="card-container">
                     {
                         cards.map(card=><Movie card={card} handelWatchTime={handelWatchTime} ></Movie>)
                     }
               </div>
               <div className="side-container">
                    this is side container
                    <Side watchTime={watchTime} />
               </div>
          </div>
     );
 };
 
 export default Display;