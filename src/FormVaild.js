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
      // emailBlock.style="display:none"
      console.log("True")
      console.log(email)
    }else{
      // emailBlock.style="display:block"
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
      <label htmlFor="nu">Chị</label>
    <div className="form">
        <div className="ten_sdt"> 
        <div className="ten_wrapper">
        <input ref={hotenRef} className="Hoten" placeholder="Nhập họ và tên" onChange={(e)=>setHoTen(e.target.value)}value={hoten}></input>
        <span className="errorMessage">Vui lòng nhập thông tin còn thiếu!</span>
        </div>
    <div className="sdt_wrapper">
    <input  ref={sdtRef}className="sdt" placeholder="Nhập số điện thoại"  onChange={(e)=>setSDT(e.target.value)} value={sdt}></input>
        <span className="errorMessage">
Số điện thoại không đúng</span>
    </div>
       
        </div>
        <div className="email_wrapper">
        <input ref={emailRef} className="email" placeholder="Nhập Email (không bắt buộc)" onChange={(e)=>{
            setEmail(e.target.value)
         }}  value={email}></input>
        <span className="errorMessage">Nhập email ngu vãi lồn</span>
        </div>


    </div>
    
  </div>
       <div className="ThanhToan dl-column">
       <button className="submit">
         HOÀN TẤT ĐẶT HÀNG
       </button>
       <p>Bằng cách đặt hàng, bạn đồng ý với Điều khoản sử dụng của FPT Shop</p>
     </div>
     </>
};

export default FormVaild;
