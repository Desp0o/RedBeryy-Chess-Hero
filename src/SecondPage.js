import React, { useEffect, useState } from "react";
import chess from './images/chessLogo.svg'
import {Link} from  "react-router-dom";
import secondBG from './images/secondBG.svg'
import './secondPage.css'
import './firstPage.css';
import nextBTN from './images/arrow_next.svg'
import { buttonStyle } from "./firstPage";
import yesMark from "./images/yesMark.svg"
import {useNavigate} from "react-router-dom"
import completeMark from "./images/CompleteMark.svg"

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


function SecondPage() {
let navigate = useNavigate()
//    ინპუტების სტეიტები
   const [name, setName]   = useState("")
   const [mail, setMail]   = useState("")
   const [phone, setPhone] = useState("")

//    YES ლოგოს სტეიტები
   const [clName, setClName]  = useState("hidden")
   const [clMail, setClMail]  = useState("hidden")
   const [clPhone, setClPone] = useState("hidden")

   const [error, setError]     = useState('incorrect')
   const [nameErr, setNameErr] = useState('')
   const [mailErr, setMailErr] = useState('')
   const [phonErr, setPhonErr] = useState('')
    
   const [complete, setComplete]   = useState('hidden')
   const [classOne, setClassOne]   = useState('')
   const [firstCoub, setFirstCoub] = useState('one')

   const alphabet = /[A-Z-a-z]/
   const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/""]/

//    სახელის ინპუტის useeffect
   useEffect(()=>{
        setName(name)
        if(name.length >= 5 ){
            setClName("visible")
            setNameErr('')
        }else{
            setClName("hidden");
        }
        
    return 
   },[name, clName])

//    მეილის ინპუტის useeffect
   useEffect(()=>{
        setMail(mail)
        
        if(mail.match("@") && mail.match('.') && mail.length >= 8){
            setClMail("visible")
            setMailErr('')
        }else{
            setClMail("hidden")
        }
        
    return 
   },[mail, clMail])

//    ნომრის ინპუტის useeffect   
   useEffect(()=>{
        setPhone(phone)
       
        if(phone.match(symbols) || phone.match(alphabet) || phone == "" || phone.length <9){
            setClPone("hidden")
        }else{
            setClPone("visible")
            setPhonErr('')
        }
     return
   },[phone, clPhone])

   useEffect(()=>{
    
        if(clName === "visible" && clMail === "visible" && clPhone === "visible" ){
            
            setClassOne('hidden')
            setFirstCoub('hideFirstCoub')
            setComplete('checkMarkVisible')
        }else{
            setComplete('hidden')
            setClassOne('num1visible')
            setFirstCoub('one')
        }
  
   },[clName,clMail,clPhone])
   


   function submit() {
        if((clName === "visible") &&
           (clMail === "visible") &&
           (clPhone === "visible")){
            navigate('/thirdPage')
        }else{
            if(clName === "hidden"){
                setNameErr(error)
            }

            if(clMail === "hidden"){
                setMailErr(error)
            }

            if(clPhone === "hidden"){
                setPhonErr(error)
            }
        }
   }

    return(
        <>
        <div>
            <div className='container'>
                {/* მარცხენა მხარე */}
                <div className='container_left'>
                    <div className='container_left_top'>
                        <img src={chess} />
                        <p>Redberry Knight Cup</p>
                    </div>
                    <div className='container_left_bot'>
                        <img className='secondBG' src={secondBG} />
                    </div>
                </div>
                {/* მარჯვენა მხარე */}
                <div className='container_sec_right'>
                    <div className="sec_right_top">
                        <p>start creating your account</p>
                    </div>

                     {/* მარჯვენა მთავარი */}
                    <div className="sec_right_bot">
                         {/* კუბიკები */}
                         <div className="coubs">
                            <div className={firstCoub}>
                                <p className={classOne}><b>1</b></p>
                                <img src={completeMark} className={complete} />
                            </div >
                            <div className="line"></div>
                            <div className="two">2</div>
                         </div>

                         {/* კუბის ტექსტები */}
                         <div className="coub_txt">
                            <p className="1">Personal Information</p>
                            <p className="2">Chess Experience</p>
                         </div>

                         {/* კუბის ტექსტები */}
                         <div className="form_h">
                            <p className="info_header">Personal Information</p>
                            <p className="info_underTXT">This is basic informaton fields</p>
                         </div>

                         <form style={{...flexCol}}>
                            <div className="inputDiv">
                                <input type='text'  className={nameErr}  placeholder="Name"         onChange={(e)=>(setName(e.target.value))}/>
                                <img className={clName} src={yesMark} />
                            </div>

                            <div className="inputDiv">
                                <input type='text'  className={mailErr}  placeholder="Email Adress" onChange={(e)=> (setMail(e.target.value))} />
                                <img className={clMail} src={yesMark} />
                            </div>

                            <div className="inputDiv">
                                <input type='text'  className={phonErr}  placeholder="Phone Number" onChange={(e)=> (setPhone(e.target.value))}/>
                                <img className={clPhone} src={yesMark} />
                            </div>

                            <div className="inputDiv">
                                <input type='text' placeholder="dd/mm/yy"/>
                            </div>  
                         </form>

                         <div style={{...flex}} className="sec_Btns">
                            
                            <Link to="/firstPage">
                                <div className="border" style={{...buttonStyle,width:"80px", height:"40px", backgroundColor:"unset", color:"black"}}>
                                    <p>Back</p>
                                </div>
                            </Link>

                            <div style={{...flex,...buttonStyle,width:"110px", height:"40px"}}
                            onClick={submit}>
                                <p>Next</p>
                                <img src={nextBTN} />
                            </div>
                         </div>
                    </div>
                        
                </div>
                    
            </div>
        </div>
        
        </>
    )
}

export default SecondPage;