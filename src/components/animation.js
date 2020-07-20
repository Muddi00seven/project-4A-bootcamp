import React,{useState} from 'react';
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";
import Car from './images/CAR.gif';
import kids from './images/KIDS.gif'
import Sun from './images/SUN.gif'
import Moon from './images/MOON.png';
import NightRoad from './images/night Road.png';
import DayRoad from './images/day road.jpg';
import Tree from './images/TREE.gif'


const Animation = () => {
    return (
        <div>
            <h1>HELLO WORLD</h1>
            <img src={Tree} />
        </div>
    )
}

export default Animation
