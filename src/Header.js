import {useState} from 'react'
const searchNavItems = [
    "IPhone11",
    "IPhone12",
    "IPhone13",
    "IPhone14",
]
const html=document.querySelector("html")
html.onclick=()=> document.querySelector(".search_nav").classList.remove("show")

function Header(){
    const [searchNav, setSearchNav]= useState(searchNavItems)
    const [inputValue , setInputValue] =useState('')
    console.log(searchNav)
    return (
     <div className="header">
     <div className=" dl-stretch-center header_top " >
     <img className="logo" src={ require('./images/download-removebg-preview.png') } />
     <div 
   
    className="  search_block">
   <div className="search_wrapper dl-stretch-center">
         <input   onClick={(e)=>{
             e.stopPropagation()
        document.querySelector(".search_nav").classList.add("show")
    }}
  
    value ={inputValue}
         onChange={(e)=>{
          setInputValue(e.target.value)
          setSearchNav(searchNavItems.filter(value=>value.includes(e.target.value)))
         }}
         className="header_search" placeholder='Nhập tên điện thoại, máy tính, phụ kiện... cần tìm'/> 
         <i className=" dl-stretch-center ti-search"></i> 
   </div>
     <ul className="search_nav">
    {searchNav.map((value,index)=> <li onClick={e=>e.stopPropagation()} className="search_item" key={index}>{value}</li>)}
         </ul>
     </div>
     
     <ul className=" dl-stretch-center header_top_content">
        <a className ="nav_container"href="/"><li className="header_top_link dl-column">
         <i className="ti-notepad icon"></i>
        <span>Thông tin hay</span>
         </li>
         <ul className="header_top_nav">
             <li>Tin mới </li>
             <li>Khuyến mãi </li>
             <li>Thủ thuật</li>
             <li>For Gamers</li>
             <li>Video hoạt hình</li>
             <li>Đánh giá</li>
             <li>Sự kiện</li>
         </ul>
         </a>
        <a href="/"><li className="header_top_link dl-column">
         <i className="ti-light-bulb icon"></i>
        <span>Thu hộ điện nước</span>
         </li></a>
        <a href="/"><li className="header_top_link dl-column">
       <i className="ti-shopping-cart icon"></i>
        <span>Giỏ hàng</span>
         </li></a>
     </ul>
     </div>
     <div className="header_bot">
         <li> <i className="ti-apple icon"></i>ĐIỆN THOẠI</li>
         <li> <i className="ti-apple icon"></i>LAPTOP</li>
         <li> <i className="ti-apple icon"></i>APPLE</li>
         <li> <i className="ti-apple icon"></i>PC-Linh Kiện</li>
         <li> <i className="ti-apple icon"></i>PHỤ KIỆN</li>
         <li> <i className="ti-apple icon"></i>MÁY CŨ GIÁ RẺ</li>
         <li> <i className="ti-apple icon"></i>HÀNG GIA DỤNG</li>
         <li> <i className="ti-apple icon"></i>SIM & THẺ</li>
         <li> <i className="ti-apple icon"></i>KHUYẾN MÃI </li>
         <li> <i className="ti-apple icon"></i>TRẢ GÓP 0%</li>
     </div>
   </div>
    )
}
export default Header