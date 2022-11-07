import React, { useEffect, useState, useRef } from "react";
import chess from './images/chessLogo.svg'
import {Link} from  "react-router-dom";
import './secondPage.css'
import './firstPage.css';
import nextBTN from './images/arrow_next.svg'
import { buttonStyle } from "./firstPage";
import {useNavigate} from "react-router-dom"
import completeMark from "./images/CompleteMark.svg"
import thirdBG from "./images/thirdBG.png"
import './thirdPage.css';
import SkillDropDawn from "./SkillDropDownDawn";
import Avatar from "./AvatarDropDown";
import CheckBoxes from "./ThirdPage_CheckBOX"

export const flexCol = {
    display: "flex",
    flexDirection : "column"
}

export const flex = {
    display: "flex",
    alignItems: "center"
}

export const btnNoStyle = {
    all: "unset",
    cursor: "pointer"
}

export const bgGreen = {
    backgroundColor: "hsl(120, 100%, 25%, 0.1)"
}


function ThirdPage() {

    return(
        <div>
            <div className='container'>
                {/* მარცხენა მხარე */}
                <div className='container_left'>
                    <div className='container_left_top'>
                        <img src={chess} />
                        <p>Redberry Knight Cup</p>
                    </div>
                    <div className='container_left_bot'>
                        <img className='secondBG' src={thirdBG} />
                    </div>
                </div>
                {/* მარჯვენა მხარე */}
                <div className='container_sec_right'>
                    <div className="sec_right_top">
                        <p>First Step Is Done, Continue To Finish Onboarding</p>
                    </div>

                     {/* მარჯვენა მთავარი */}
                    <div className="sec_right_bot">
                         {/* კუბიკები */}
                         <div className="coubs">
                         <div className={"one"} style={bgGreen}>
                                <img src={completeMark} className={'checkMarkVisible'} />
                            </div >
                            <div className="line"></div>
                            <div className="two"><b>2</b></div>
                         </div>

                         {/* კუბის ტექსტები */}
                         <div className="coub_txt">
                            <p className="1">Personal Information</p>
                            <p className="2">Chess Experience</p>
                         </div>

                         {/* კუბის ტექსტები */}
                         <div className="form_h">
                            <p className="info_header">Chess Experience</p>
                            <p className="info_underTXT">This is basic informaton fields</p>
                         </div>

                        

                        <div>
                            <div style={{paddingLeft:'50px'}} className='dropDown'>
                                <p >Have you participated in the Redberry Championship? *</p>
                                    <div style={{...flex, gap:'30px'}} >                    
                                        <SkillDropDawn />
                                        <Avatar />
                                    </div>                      
                            </div>
                        </div>

                        <div className="checkBoxDiv">
                            <CheckBoxes />
                        </div>

                            {/* ღილაკები */}
                         <div style={{...flex}} className="sec_Btns">
                            
                            <Link to="/SecondPage">
                                <div className="border" style={{...buttonStyle,width:"80px", height:"40px", backgroundColor:"unset", color:"black"}}>
                                    <p>Back</p>
                                </div>
                            </Link>

                            <Link to="/TheEnd">
                                <div style={{...flex,...buttonStyle,width:"110px", height:"40px"}} >
                                    <p>Next</p>
                                    <img src={nextBTN} />
                                </div>
                            </Link>
                         </div>
                    </div>
                        
                </div>
                    
            </div>
        </div>
        
        
    )
}

export default ThirdPage;


