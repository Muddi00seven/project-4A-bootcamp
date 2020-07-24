import React,{useState} from 'react';
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";
import Car from './images/CAR.gif';
import kids from './images/KIDS.gif'
import Sun from './images/SUN.gif'
import Moon from './images/MOON.png';
import NightRoad from './images/night Road.png';
import DayRoad from './images/day road.jpg';
import Tree from './images/TREE.gif';
import Tree2 from './images/TREE2.png'

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
            direction: "reverse",
          },
        });
      
    // const car = <Car/>

    return (
        <div
        onClick={() =>
          getAnimation().updatePlaybackRate(getAnimation().playbackRate * 1.2)
        }
      >
        <div>
           <img src={DayRoad} className="DayRoad" alt="forest" />
         <img src={Tree} className="tree" alt="tree1gif" />
          <img src={Tree2} className="tree2" alt="tree7" />
         {/*  <img src={tree6} className="tree2gif" alt="tree2gif" /> */}
        </div>
        <div ref={ref}>
          <div>
            {/* <img src={tree1} className="tree1" alt="tree1" />
            <img src={tree2} className="tree2" alt="tree2" />
            <img src={tree3} className="tree3" alt="tree3" />
            <img src={tree4} className="tree4" alt="tree4" /> */}
            <div>
               <img src={Tree2} className="tree3" alt="house1" />
            {/*  <img src={house2} className="house2" alt="house2" />
              <img src={house3} className="house3" alt="house3" />
              <img src={house4} className="house4" alt="house4" />
              <img src={house5} className="house5" alt="house5" />
              <img src={house6} className="house6" alt="house6" /> */}
            </div>
          </div>
        </div>
         {/* <div>
          <img src={Car} className="road" alt="road" />
        </div>
        <div>
          <img src={Tree2} className="person" alt="person" />
        </div> */}
        <div>
          <img src={Car} className="Car" alt="cow" />
        </div>
        <div>
          <img src={Car} className="grass" alt="grass" />
        </div> *
        <div></div>
      </div>
  
    )
}

export default Animation
