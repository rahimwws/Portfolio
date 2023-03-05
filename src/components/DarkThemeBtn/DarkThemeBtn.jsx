import { useState,useEffect,useRef } from "react";

import sun from "./sun.svg";
import moon from "./moon.svg";
import './style.css'
export const DarkThemeBtn = ()=>{
    const [DarkMode,setDarkMode] = useState('light')
    const Btn = useRef(null)
    useEffect(()=>{
        console.log('ll');
        if(DarkMode === 'dark'){
            document.body.classList.add('dark')
            Btn.current.classList.add('dark-mode-btn--active')
        }else{
            document.body.classList.remove('dark')
            Btn.current.classList.remove('dark-mode-btn--active')
        }
    },[DarkMode])
    const ToggleSwitch = ()=>{
        console.log('dd');
        setDarkMode((currentValue)=>{
            return currentValue === 'light' ? 'dark' : 'light' 
        })
    }
    return(
        <button className="dark-mode-btn" onClick={ToggleSwitch} ref = {Btn}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
          </button>
    )
}