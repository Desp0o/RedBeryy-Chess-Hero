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
    const [showStyle, setShowStyleStyle] = useState('hiddenAvatar')

    function toggleArrow() {
        if(!toggleArr){
            setMenuArrow('rotateArr')
            setShowStyleStyle('showsAvatar')
            setToggleArr(true)
        }else{
            setMenuArrow('rotateArrBack')
            setShowStyleStyle('hiddenAvatar')
            setToggleArr(false)
        }
   }

    return(
        <div className="selection2" onClick={()=> toggleArrow()}>
            <p>{avatar}</p>
            <img className={menuArrow} src={dropDownArr} />

                
                <div className={showStyle}>
                    <div className="innderDIV pHover" onClick={()=> setAvatar('Magnus Carlsen')}>
                        <p>Magnus Carlsen</p>
                        <img src={player1}  className="imgSize"/>
                    </div>

                    <div className="innderDIV pHover" onClick={()=> setAvatar('Willhem Steinz')}>
                        <p>Willhem Steinz</p>
                        <img src={player2}  className="imgSize"/>
                    </div>

                    <div className="innderDIV pHover" onClick={()=> setAvatar('Bobby Fisher')}>
                        <p>Bobby Fisher</p>
                        <img src={player3}  className="imgSize"/>
                    </div>

                    <div className="innderDIV pHover" onClick={()=> setAvatar('Don Despo')}>
                        <p>Don Despo</p>
                        <img src={player4} className="imgSize"/>
                    </div>
                </div>
                
        </div>
    )
}


export default Avatar;