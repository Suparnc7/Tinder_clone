import React, { useState,useEffect } from 'react'
import TinderCard from "react-tinder-card"
import './tindercards.css'
import axios from './axios'

function Tindercards() {
  const [people,setpeople] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const req = await axios.get('./tinder/cards')
      
      setpeople(req.data);
    }

    fetchData();
  },[])
  
    const swiped = (direction,nameToDelete) =>{
        console.log("removing:" + nameToDelete);
        //setLastDirection(direction);
    };

    const outOfFrame = (name) =>{
        console.log(name+ "left the screen");
    };

    return (
    <div className='card_main'>
        <div className='container'>
            {people.map((person) => (
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir,person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                <div 
                    style ={{backgroundImage: `url(${person.imgUrl})`}}
                    className="card">
                    <h2>{person.name}</h2>
                </div>  
                </TinderCard>
            ))}
        </div>
    </div>
  ) 
}

export default Tindercards