import React, { useEffect, useState } from "react";
import './thirdPage.css';

function CheckBoxes() {
    
    return(
        <div className="checkBoxDiv_inner">
        <p style={{fontSize:"18px", fontWeight:"400"}}>Have you participated in the Redberry Championship? </p>
        
        <div style={{display:"flex", gap:"30px", paddingTop:"10px"}}>
            <div className="firstBox">
                <label>
                    <input type="radio" />
                </label>
                <p>Yes</p>
            </div>

            <div className="firstBox">
                <label>
                    <input type="radio" />
                </label>
                <p>No</p>
            </div>
        </div>

        </div>
    )
}

export default CheckBoxes;