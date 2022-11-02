import React, { useEffect, useState } from "react";
import './thirdPage.css';
import dropDownArr from './images/dropDownArrow.svg'

function Avatar() {
    const [avatar, setAvatar] = useState('choose your Avatar')
    const [toggleArr, setToggleArr] = useState(false)
    const [menuArrow, setMenuArrow] = useState('')

    function toggleArrow() {
        if(!toggleArr){
            setMenuArrow('rotateArr')
            setToggleArr(true)
        }else{
            setMenuArrow('rotateArrBack')
            setToggleArr(false)
        }
   }

    return(
        <div className="selection1" onClick={()=> toggleArrow()}>
            <p>{avatar}</p>
            <img className={menuArrow} src={dropDownArr} />

                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
        </div>
    )
}


export default Avatar;