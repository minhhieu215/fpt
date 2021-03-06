import React from 'react';
import {useState, useEffect, useRef} from 'react'
const FormVaild = () => {
  const [ hoten, setHoTen] =useState("")
  const [ sdt, setSDT] =useState("")
  const [ email, setEmail] =useState("")
  const hotenRef =useRef()
  const sdtRef =useRef()
  const emailRef =useRef()
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  console.log(email)
  useEffect(()=>{
   const submitBtn=   document.querySelector(".submit");
   const emailBlock = document.querySelector(".email_wrapper").querySelector(".errorMessage")
   submitBtn.onclick=()=>{
    if(validateEmail(email)){
      emailBlock.style="display:none"
      console.log("True")
      console.log(email)
    }else{
      emailBlock.style="display:block"
      console.log(email)
      console.log("False")
    }
      if(hoten==""){
        console.log(hoten)
        hotenRef.current.classList.add("error")
        hotenRef.current.closest(".ten_wrapper").querySelector(".errorMessage").style="display:block"
      }
      if(sdt==""){
        console.log(sdt)

        sdtRef.current.classList.add("error")
        sdtRef.current.closest(".sdt_wrapper").querySelector(".errorMessage").style="display:block"
      }
      hotenRef.current.onblur=()=>{
        hotenRef.current.classList.remove("error")
        hotenRef.current.closest(".ten_wrapper").querySelector(".errorMessage").style="display:none"
      }
      sdtRef.current.onblur=()=>{
        sdtRef.current.classList.remove("error")
        sdtRef.current.closest(".sdt_wrapper").querySelector(".errorMessage").style="display:none"
      }
   }
  })
  return <>
  <div className="form_wrapper">
      <input  type="radio"  id ="nam" className="gioitinh men" name="gioitinh" checked={false} />
      <label htmlFor="nam">Anh</label>
      <input   type="radio" id ="nu" className="gioitinh women" name="gioitinh" checked={false} />
      <label htmlFor="nu">Ch???</label>
    <div className="form">
        <div className="ten_sdt"> 
        <div className="ten_wrapper">
        <input ref={hotenRef} className="Hoten" placeholder="Nh???p h??? v?? t??n" onChange={(e)=>setHoTen(e.target.value)}value={hoten}></input>
        <span className="errorMessage">Vui l??ng nh???p th??ng tin c??n thi???u!</span>
        </div>
    <div className="sdt_wrapper">
    <input  ref={sdtRef}className="sdt" placeholder="Nh???p s??? ??i???n tho???i"  onChange={(e)=>setSDT(e.target.value)} value={sdt}></input>
        <span className="errorMessage">
S??? ??i???n tho???i kh??ng ????ng</span>
    </div>
       
        </div>
        <div className="email_wrapper">
        <input ref={emailRef} className="email" placeholder="Nh???p Email (kh??ng b???t bu???c)" onChange={(e)=>{
            setEmail(e.target.value)
         }}  value={email}></input>
        <span className="errorMessage">Nh???p email ngu v??i l???n</span>
        </div>


    </div>
    
  </div>
       <div className="ThanhToan dl-column">
       <button className="submit">
         HO??N T???T ?????T H??NG
       </button>
       <p>B???ng c??ch ?????t h??ng, b???n ?????ng ?? v???i ??i???u kho???n s??? d???ng c???a FPT Shop</p>
     </div>
     </>
};

export default FormVaild;
