import React from 'react'
import { LuLamp, LuLampFloor, LuLightbulb } from 'react-icons/lu'
import { PiCouch, PiRug } from 'react-icons/pi'
import { MdOutlineChair } from 'react-icons/md'
import { TbPlant } from "react-icons/tb";
import { BiDrink } from 'react-icons/bi';
import { LOGO_CONTENT } from '../constants';

const Logo = () => {
    var items = Array.from(Array(7).keys());
    var item = items[Math.floor(Math.random()*items.length)];

    return (
        <>
            <div className='font-bold uppercase text-2xl pr-2'>{LOGO_CONTENT}</div>
            <div>
                {item === 0 && (<LuLamp size={40} />)}
                {item === 1 && (<PiCouch size={40} />)}
                {item === 2 && (<MdOutlineChair size={40} />)}
                {item === 3 && (<TbPlant size={40} />)}
                {item === 4 && (<BiDrink size={40} />)}
                {item === 5 && (<PiRug size={40} />)}
                {item === 6 && (<LuLampFloor size={40} />)}
            </div>
        </>
    )
}

export default Logo