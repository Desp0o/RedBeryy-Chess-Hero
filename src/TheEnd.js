import React, {useRef} from "react";
import lastBg from "./images/lastBg.svg"
import './secondPage.css'
import './firstPage.css';
import './thirdPage.css';
import chess from './images/chessLogo.svg'
import rocket from "./images/rocket.svg"
import { useState } from "react";



function TheEnd() {

    const [rocketClass, setrocketClass] = useState('')

    setTimeout(()=>{
        setrocketClass('fly');
    },500)
        
        
 

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
                        <img className='secondBG' src={lastBg} />
                    </div>
                </div>
                {/* მარჯვენა მხარე */}
                <div className='container_sec_right'>
                    <div className="end_right_bot">
                        <img src={rocket}  />
                        <h3 className={rocketClass} style={{opacity:"0"}}>Onboarding Completed!</h3>
                    </div> 
                </div>
                    
            </div>
        </div>
    )
}


export default TheEnd;