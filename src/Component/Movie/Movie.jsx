import React from 'react';
import './Movi.css'
 import { ToastContainer, toast } from 'react-toastify';
const Movie = ({card,handelWatchTime}) => {
     const tostMsg=()=>{
          toast(" yes you got yet !")
     }

     return (
          <div className='movie-container' >
               <div className="movie-card">
                    <img src={card.poster} alt="" />
                    <div className='movie-info'>
                    <h3> {card.movieName}</h3>
                    <p>{card.description}</p>
                    </div>
                    <div className='movie-d'>
                         <p>WatchTime: {card.watchTime}</p>
                         <p>Rating :{card.imdbRating}</p>
                    </div>
                    <button onClick={()=>{
                         handelWatchTime(card.watchTime)
                         tostMsg()
                         }} className='btn'>Bookmark</button>
                    <button onClick={tostMsg}>tost</button>
               </div>
               
          </div>
     );
};

export default Movie;