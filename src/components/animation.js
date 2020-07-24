import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import Car from './images/CAR.gif';
import Sun from './images/SUN.gif'
import DayRoad from './images/day road.jpg';
import Tree from './images/TREE.gif';
import Tree2 from './images/TREE2.png'
import Teddy from './images/teddy.gif'
import './css/animation.css'

const Animation = () => {
    const { ref, getAnimation } = useWebAnimations({
        keyframes: [
            { transform: "translateX(-285%)" },
            { transform: "translateX(130%)" },
          ],
          timing: {
            duration: 30000,
            iterations: Infinity,
            easing: "ease-in-out",
          },
        });
      
        
    return (
        <div>
        <div>
           <img src={DayRoad} className="DayRoad" alt="DayRoad" />
           <img src={Sun} className="Sun" alt="Sun" />

        </div>
        <div ref={ref}>
          <div>
            
            <div>
               <img src={Tree2} className="tree3" alt="Tree2" />
               <img src={Tree} className="tree" alt="Tree" />
          <img src={Tree2} className="tree2" alt="Tree2" />
            
            </div>
          </div>
        </div>
     
        <div  onClick={() =>
          getAnimation().updatePlaybackRate(getAnimation().playbackRate * 1.2)
        }>
                     <img src={Teddy} className="Teddy" alt="house1" />
          <img src={Car} className="Car" alt="Car" />
        </div>
       
        <div></div>
      </div>
  
    )
}

export default Animation
