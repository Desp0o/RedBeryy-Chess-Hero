import React, { useState, UseEffect, useEffect } from 'react';
import './firstPage.css';
import firstBG from './images/first_bg.svg'
import chess from './images/chessLogo.svg'
import nextBTN from './images/arrow_next.svg'
import {Link} from  "react-router-dom";

export const buttonStyle = {
    width:"190px",
    display:"flex",
    boxSizing:"border-box",
    fontFamily:'Open Sans',
    fontSize:"20px",
    fontWeight:"400",
    backgroundColor:"black",
    padding: "15px 10px",
    borderRadius: "10px",
    cursor: "pointer",
    alignItems: "center",
    wordSpacing: "5px",
    color:"white",
    gap:"20px",
    justifyContent:"center",
    position: "relative"
}

function FirstPage() {

    return(
        <div>
            <div className='container'>
                <div className='container_left'>
                    <div className='container_left_top'>
                        <img src={chess} />
                        <p>Redberry Knight Cup</p>
                    </div>
                    <div className='container_left_bot'>
                        <img className='first_bg' src={firstBG} />
                    </div>
                </div>

                <div className='container_right'>
                    
                    <p style={{display:"flex", alignItems:"center", gap:"10px"}}>chess says<span>A LOT ABOUT</span> </p>
                    <p>who we are</p>

                    <Link to="/SecondPage">
                    <div className='button' style={{...buttonStyle, gap:"0px"}} >
                        <p>get started</p>
                        <img src={nextBTN} />
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FirstPage;