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
   },[name])

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
   },[mail])

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
   },[phone,clPhone])

   
   function submit() {
        if((clName === "visible") &&
           (clMail === "visible") &&
           (clPhone === "visible")){
            navigate('/firstPage')
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
                            <div className="one">1</div>
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
                                <input type='text'  className={nameErr}  placeholder="Name"         onChange={(e)=>setName(e.target.value)}/>
                                <img className={clName} src={yesMark} />
                            </div>

                            <div className="inputDiv">
                                <input type='text'  className={mailErr}  placeholder="Email Adress" onChange={(e)=> setMail(e.target.value)} />
                                <img className={clMail} src={yesMark} />
                            </div>

                            <div className="inputDiv">
                                <input type='text'  className={phonErr}  placeholder="Phone Number" onChange={(e)=> setPhone(e.target.value)}/>
                                <img className={clPhone} src={yesMark} />
                            </div>

                            <div className="inputDiv">
                                <input type='date' min="1995-12-31"/>
                            </div>  
                         </form>

                         <div style={{...flex}} className="sec_Btns">
                            
                            <Link to="/firstPage">
                                <div className="border" style={{...buttonStyle,width:"90px", height:"50px", backgroundColor:"unset", color:"black"}}>
                                    <p>Back</p>
                                </div>
                            </Link>

                            <div style={{...flex,...buttonStyle,width:"120px", height:"50px"}}
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













// var birth = document.getElementById('bday')
// if(birth != "")
// {

//     var record=document.getElementById('bday').value.trim();
//     var currentdate=new Date();    
//     var day1 = currentdate3.getDate();   
//     var month1 = currentdate3.getMonth();
//     month1++;     
//     var year11 = currentdate3.getFullYear()-17;
//     var year2= currentdate3.getFullYear()-100;   
//     var record_day1=record.split("/");
//     var sum=record_day1[1]+'/'+record_day1[0]+'/'+record_day1[2];  
//     var current= month1+'/'+day1+'/'+year11;
//     var current1= month1+'/'+day1+'/'+year2;
//     var d1=new Date(current)
//     var d2=new Date(current1)
//     var record1 = new Date(sum);      
//     if(record1 > d1)
//     {

//         alert("Sorry ! Minors need parential guidance to use this website");
//         document.getElementById('bday').blur();
//         document.getElementById('bday').value="";
//         document.getElementById('bday').focus();
//         return false;
//     }
// } 
// }



// function isDate18orMoreYearsOld(day, month, year) {
//     var maxBirthDate = new Date();
//     maxBirthDate = new Date(maxBirthDate.setYear(maxBirthDate.getYear() - 18));
//     var maxYear = maxBirthDate.getYear();
//     var maxMonthOnMaxYear = maxBirthDate.getMonth() + 1;
//     var maxDayOnMaxMonthOnMaxYear = maxBirthDate.getDate();
//     if (year > maxYear) {
//         return true;
//     }
//     if (year == maxYear) {
//         if (month > maxMonthOnMaxYear) {
//             return true;
//         }
//         if (month == maxMonthOnMaxYear) {
//             if (day >= maxDayOnMaxMonthOnMaxYear) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// function isDate18orMoreYearsOld(day, month, year) {
//     return new Date(year+18, month-1, day) <= new Date();
// }