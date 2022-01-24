import React, {useState,useMemo}from 'react';
import FormVaild from  './FormVaild'
const ShopCart = () => {
  var dataLocalStorage=[];
  var spInGioHangs=0;
  console.log("render agin")
  for(var key in localStorage){
    if(key.includes("GB"))
  {dataLocalStorage.push(JSON.parse(localStorage[key]))
  }
  }
  const [total , setTotal ] = useState(()=>{
    return  dataLocalStorage.reduce((previousValue, currentValue) => {
      return parseInt(previousValue) +  parseInt(currentValue.price)*parseInt(currentValue.soluong)
    }, 0)
  })

  // const total =   dataLocalStorage.reduce((previousValue, currentValue) => {
  //   return parseInt(previousValue) +  parseInt(currentValue.price)*parseInt(currentValue.soluong)
  // }, 0)
  //   console.log(total)
console.log(dataLocalStorage)
const Increase = (e)=>{
    e.target.closest(".bill_sp").querySelector(".soluong").value++;
    var TenSpMua = e.target.closest(".bill_sp").querySelector(".TenSpMua").innerText
    var color =e.target.closest(".bill_sp").querySelector(".colorSp").innerText
    var price = parseInt(parseInt(e.target.closest(".bill_sp").querySelector(".price").innerText)+"đ")
       localStorage.setItem(`${TenSpMua} ${color}`,JSON.stringify({TenSpMua,color,price,soluong:  e.target.closest(".bill_sp").querySelector(".soluong").value}))
       setTotal(prev=>prev+price)
    return
} 
const Decrease = (e)=>{
  if(e.target.closest(".bill_sp").querySelector(".soluong").value==1) return
    e.target.closest(".bill_sp").querySelector(".soluong").value--;
    var TenSpMua = e.target.closest(".bill_sp").querySelector(".TenSpMua").innerText
    var color =e.target.closest(".bill_sp").querySelector(".colorSp").innerText
    var price = parseInt(e.target.closest(".bill_sp").querySelector(".price").innerText)
       localStorage.setItem(`${TenSpMua} ${color}`,JSON.stringify({TenSpMua,color,price,soluong:  e.target.closest(".bill_sp").querySelector(".soluong").value}))
       setTotal(prev=>prev-price)

    return
} 
const Delete = (e)=>{
  var TenSpMua = e.target.closest(".bill_sp").querySelector(".TenSpMua").innerText
  var color =e.target.closest(".bill_sp").querySelector(".colorSp").innerText
  var price = parseInt(e.target.closest(".bill_sp").querySelector(".price").innerText)
  console.log(`${TenSpMua} ${color}`)
     localStorage.removeItem(`${TenSpMua} ${color}`)
 console.log(e.target.closest(".bill_sp"))
     setTotal(prev=>prev-price*e.target.closest(".bill_sp").querySelector(".soluong").value)
}
return <div className="bill_wrapper dl-column">
      <div className="bill">

      <div className="bill_title">Có {dataLocalStorage&&dataLocalStorage.length||0} sản phẩm trong giỏ hàng</div>
    {dataLocalStorage&&dataLocalStorage.map((spInGioHang,index)=> {
      return(spInGioHang&&
    
    <div key ={index} className="bill_sp">
  <img className="bill_img" src={spInGioHang.color=="Vàng" && require('./images/ipvang.jpg')||require('./images/iphone13.png')} alt="" />    
  <div className="bill_soluong">
      <h3 className="TenSpMua">{spInGioHang.TenSpMua}</h3>
      <div className="drop_down"><p className="colorSp">{spInGioHang.color}</p>
      </div>
       </div>
  <div className="add_soluong">
    <div onClick ={Increase}className="addBtn btn">+</div>
    <input  className="soluong"type="text" value={spInGioHang.soluong||1} />
    <div onClick={Decrease} className="minusBtn btn">-</div>
  </div>
<div className="price">{spInGioHang.price}đ</div>
<button onClick={Delete} className="delete_btn">Xóa</button>
</div>
     )
     })}
   
      </div>
      <div className="bill_total">
    <p>Tổng tiền:
      <span className="total_price">{total} đ</span>
</p>
      </div>
      <FormVaild/>
 
  </div>
};

export default ShopCart;

