import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import style from './pages/Header.module.css'

function Header() {
    const [activeMenu, setActiveMenu] = useState<boolean>(false)

   const setActive= () => {

        activeMenu ?
            setActiveMenu(false)
            : setActiveMenu(true)
    }

    return (

        <div className={style.Header}>

            <div
                className={activeMenu ? style.menu : style.Active }>

                <OnMouseMoveTag>
                    <NavLink to={PATH.PRE_JUNIOR}> pre-junior</NavLink>
                </OnMouseMoveTag>

                <OnMouseMoveTag>
                    <NavLink to={PATH.JUNIOR}> junior</NavLink>
                </OnMouseMoveTag>

                <OnMouseMoveTag>
                    <NavLink to={PATH.JUNIOR_PlUS}> junior+plus</NavLink>
                </OnMouseMoveTag>



            </div>
            <span className={style.button}>
                <button onClick={setActive}>Menu</button>
            </span>
        </div>
    )
}

export default Header

export const OnMouseMoveTag =  (props:any)=>{

    const [isOnMouse,setIsOnMouse]=useState(false)

    const onMouseHandler = () => setIsOnMouse(isOnMouse?false:true)

    return(
        <span onMouseEnter={onMouseHandler}
              onMouseLeave={onMouseHandler}
        className={isOnMouse?style.mouseUp:style.mouseMove}>{props.children}</span>

    )
}