
import React, { useEffect, useState, useRef } from "react";
import './thirdPage.css';



function CheckBoxes() {

    const yesRef = useRef('')
    const noRef = useRef('')
    

    function valueChange() {
        if(yesRef.current.checked = true){
            noRef.current.checked=false; 
        }
    }

    function noChange() {
        if(noRef.current.checked = true){
            yesRef.current.checked = false;
        }
    }
  
   
   
    
    return(
        <div className="checkBoxDiv_inner">
        <p style={{fontSize:"18px", fontWeight:"400"}}>Have you participated in the Redberry Championship? </p>
        
        <div style={{display:"flex", gap:"30px", paddingTop:"10px"}}>
            <div className="firstBox">
                <label>
                    <input ref={yesRef} type="radio"  onClick={valueChange}/>
                </label>
                <p>Yes</p>
            </div>

            <div className="firstBox">
                <label>
                    <input ref={noRef} type="radio"    onClick={noChange}/>
                </label>
                <p>No</p>
            </div>
        </div>

        </div>
    )
}

export default CheckBoxes;