import React, { useEffect, useState } from 'react';
import './Side.css'
const Side = ({watchTime}) => {
     const [ti, setti] = useState(watchTime)
      useEffect(()=>{
          const showStoreg = localStorage.getItem('watch')
          setti(showStoreg)
      },[watchTime])
     return (
          <div>
                <h4>time :{ti}</h4>
          </div>
     );
};

export default Side;