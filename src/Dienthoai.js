import { useState } from 'react'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SaleSP from './SaleSP'
import {sanphams } from './Sale'
// import { Outlet } from 'react-router-dom';
const config = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,  
  
  };
  const choices = [
      {
        id:1,
        name:"Tất cả",
      },
      {
        id:2,
        name:"Samsung",
      },      {
        id:3,
        name:"Xiaomi",
      },      {
        id:4,
        name:"TechNo",
      },      {
        id:5,
        name:"Vsmart",
      },      {
        id:6,
        name:"Masstel",
      },      {
        id:7,
        name:"IPhone",
      },      {
        id:8,
        name:"Oppo",
      },      {
        id:9,
        name:"vivo",
      },      {
        id:10,
        name:"Realme",
      },      {
        id:11,
        name:"NOkia",
      },
  ]
  const prices = [
    {
      price:"Tất cả",
      text : "Tất cả",
    },
    {
      text:"Dưới 2 triệu",
    },
    {
      text :"Từ 2 - 4 triệu",
    },
    {
      text :"Từ 4- 7 triệu",
    },
    {
      text :"Từ 7 - 13 triệu",
    },
    {
      text :"Trên 13 triệu",
    },
  ]
function Dienthoai(){
        const [ checked , setChecked ] = useState(sanphams)
        const [ checkedPrices , setCheckedPrices ] = useState([])
        // const reRender =()=>{
        //   sanphams.filter(sanpham=> )
        // }
        const newSp=  sanphams.filter(sanpham=> {
          if(checked[0]=="Tất cả") return sanpham
          return checked.includes(sanpham.brand)
        })
        const handleChecked = (name, setCheck,checkArray)=>{

          setCheck(()=>{
          
            const isChecked = checkArray.includes(name)
            if(isChecked){
                    return checkArray.filter((item)=>item!==name)
            }
            else if(name==="Tất cả"){
                return ["Tất cả"]
            }
            else{
                const isAll= checkArray.includes("Tất cả")
                    if(isAll){
                return [name]
                    }
                return [...checkArray,name]
            }
        })
        }
return ( 
    <div className="sp_container">
        <div className="nav_bar">
           <h3 >Hãng sản xuất </h3>
           <div  className="choices_wrapper">
            {choices.map((choice,index)=>(
                <div key={index} className="choice">
                    <input type="checkbox" 
                    checked= {checked.includes(choice.name)}
                    onChange={()=>handleChecked(choice.name,setChecked,checked)}
                    />
                    {choice.name}
                </div>
            ))}
           </div>
           <h3 >Mức giá </h3>
           <div  className="choices_wrapper">
            {prices.map((price,index)=>(
                <div key={index} className="choice">
                    <input type="checkbox" 
                    checked= {checkedPrices.includes(price.text)}
                    onChange={()=>handleChecked(price.text,setCheckedPrices,checkedPrices)}
                    />
                    {price.text}
                </div>
            ))}
           </div>

        </div>
        <div className = "sp_wrapper">
            <div className="sp_title">
                <h1>Điện thoại</h1>
                <div className="slider_brand">
                <Slider {...config}>
                <img src={require("./images/iphone.jpg")}/>
                <img src={require("./images/iphone.jpg")}/>
                <img src={require("./images/iphone.jpg")}/>
                <img src={require("./images/iphone.jpg")}/>
                <img src={require("./images/iphone.jpg")}/>
                <img src={require("./images/iphone.jpg")}/>
                <img src={require("./images/iphone.jpg")}/>
            </Slider>
                </div>
        
            </div>
            <div className = "spList">
              <div className="uutien">
                <span>Ưu tiên nên xem</span>
                <button>Bán chạy nhất</button>
                <button>Trả góp 0%</button>
                <button>Giá thấp</button>
                <button>Giá cao</button>
                <button>Ưu đãi online</button>
                <div className="sort">
                <button >Bán chạy nhất</button>
                <ul className="sort_nav">
                  <li>Trả góp 0%</li>
                  <li>Giá thấp</li>
                  <li>Giá cao</li>
                  <li>Ưu đãi online</li>
                </ul>
                </div>
              </div>
            
           { newSp.length>0&&<SaleSP slider={false}title=""sanphams={newSp}/>||<SaleSP slider={false}title=""sanphams={sanphams}/>}
            </div>

        </div>
    </div>
)
}
export default Dienthoai