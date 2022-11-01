import React, { useEffect, useState } from "react";
import './thirdPage.css';
import dropDownArr from './images/dropDownArrow.svg'

export const flex = {
    display: "flex",
    alignItems: "center"
}

function SkillDropDawn(){

    const [skillName, setskillName] = useState('Level of Knowledge')
    const [showStyle, setShowStyleStyle] = useState('hiddenSkills')
    
    //    სკილის დროპდაუნის Toggle
   const [toggleArr, setToggleArr] = useState(false)
   const [menuArrow, setMenuArrow] = useState('')

   
//    სკილის დროპდაუნის ფუნქცია
   function toggleArrow() {
        if(!toggleArr){
            setMenuArrow('rotateArr')
            setShowStyleStyle('hiddenSkills showskill')
            setToggleArr(true)
        }else{
            setMenuArrow('rotateArrBack')
            setShowStyleStyle('hiddenSkills')
            setToggleArr(false)
        }
   }




    return(
     <div className="selection1" onClick={toggleArrow}>
                            <p>{skillName}</p>
                            <img className={menuArrow} src={dropDownArr} />

                                <div className={showStyle}>
                                    <p onClick={()=> setskillName('Beginner')}> Beginner </p>
                                    <p onClick={()=> setskillName('Intermediate')}>Intermediate</p>
                                    <p onClick={()=> setskillName('Pro')}>Pro</p>
                                </div>
                        </div>

        
    )
}


export default SkillDropDawn;



