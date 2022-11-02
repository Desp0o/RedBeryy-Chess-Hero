import React, { useEffect, useState } from "react";
import './thirdPage.css';
import dropDownArr from './images/dropDownArrow.svg'
import player1 from './images/player1.svg'
import player2 from './images/player2.svg'
import player3 from './images/player3.svg'
import player4 from './images/player4.svg'

function Avatar() {
    const [avatar, setAvatar] = useState('choose your Avatar')
    const [toggleArr, setToggleArr] = useState(false)
    const [menuArrow, setMenuArrow] = useState('')
    const [showStyle, setShowStyleStyle] = useState('hiddenSkills')

    function toggleArrow() {
        if(!toggleArr){
            setMenuArrow('rotateArr')
            setShowStyleStyle('showskill')
            setToggleArr(true)
        }else{
            setMenuArrow('rotateArrBack')
            setShowStyleStyle('hiddenSkills')
            setToggleArr(false)
        }
   }

    return(
        <div className="selection1" onClick={()=> toggleArrow()}>
            <p>{avatar}</p>
            <img className={menuArrow} src={dropDownArr} />

                <div style={{marginTop:'100px'}}>
                <div className={showStyle}>
                    <div className="innderDIV">
                        <p>Magnus Carlsen</p>
                        <img src={player1} />
                    </div>

                    <div className="innderDIV">
                        <p>Magnus Carlsen</p>
                        <img src={player1} />
                    </div>

                    <div className="innderDIV">
                        <p>Magnus Carlsen</p>
                        <img src={player1} />
                    </div>

                    <div className="innderDIV">
                        <p>Magnus Carlsen</p>
                        <img src={player1} />
                    </div>
                </div>
                </div>
        </div>
    )
}


export default Avatar;