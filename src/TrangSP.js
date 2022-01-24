import React from 'react'
import {useState ,useRef} from 'react'
import { Link } from 'react-router-dom'
const TrangSP = () => {
    const [checkRadio , setCheckRadio ] = useState()
    const [color,  setColor] = useState('Vàng')
    const [GBs , setGBs] = useState("128GB")
    const [ price , setPrice] = useState()
    const TenSpMua =`iPhone 13 Pro Max ${GBs} `
   const BUY=(e)=>{
        console.log("Ten sp :", TenSpMua,"Màu:",color,"Price: " , price)
        if(price){
        localStorage.setItem(`${TenSpMua}${color}`,JSON.stringify({TenSpMua,color,price,soluong:1}))
        }else{
            e.stopPropagation()
            alert("Vui lòng chọn sản phẩm bằng cách tick chọn ạ :) ")
        }
    }
    return (
        <>
         <h1 className="sp_name">iPhone 13 Pro Max {GBs} </h1>
        <div className ="trangsp_wrapper">
            <div className="row_1">
            <div className="sp_img_block ">
{color=="Vàng"&& <img src={require('./images/ipvang1.jpg')}/>|| <img src={require('./images/iphone13.png')}/>}
            </div>
            <div className="view_img dl-center-center">
                <div className="view_img_item dl-column">
                <img className="icon" src={require('./images/icon.png')}/>
                <p>Xem thêm 8 ảnh</p>
                </div>
                  <div className="view_img_item dl-column">
                <img className="icon" src={require('./images/boxicon.png')}/>
                <p>Trong hộp có gì</p>
                </div>
            </div>
            <div className="detailSp">
                <ul className ="detailSp_item">
                    <li>6.7", Super Retina XDR, OLED, 2778 x 1284 Pixel </li>
                    <li>12.0 MP + 12.0 MP + 12.0 MP</li>
                    <li>12.0 MP</li>
                    <li>
A15 Bionic</li>
                    <li>128 GB</li>
                </ul>
                <p className="thongso">Xem thông số kĩ thuật</p>
            </div>
            <div className="bao_hanh">
                <img src={require('./images/baohanh.png')}/>
                <span>Hàng chính hãng - bảo hành 12 Tháng</span>
                <img src={require('./images/ship.png')}/>
                <span>Giao hàng toàn quốc.</span>
            </div>
            </div>
            <div className="row_2">
                <div className="price_block">
                <h1 className="price">31.990.000₫</h1>
                <h2  style= {{display:'inline'}}className="price_before"><strike>33.990.000₫</strike></h2>
                </div>
                <div className ="select">
                    <div className="select_item">
                  
                    <p className="1 GB"> <input type="radio" id="1"  checked={1==checkRadio} className="type" name="type" onChange={()=>{
                        setCheckRadio(1)
                        setGBs("128GB")
                        setPrice("31990000")
}   
                        } />128GB</p>                        
                    <p>31990000₫</p>
                </div>
                    <div className="select_item">
                  
                    <p className="2 GB"> <input type="radio" id="2" checked={2==checkRadio}  className="type" name="type" onChange={()=>{
                        setCheckRadio(2)
                        setGBs("256GB")
                        setPrice("34490000")
                    }
                        }/>256GB</p>                        
                    <p>34490000₫</p>
                </div>
                    <div className="select_item">
                  
                    <p className="3 GB"> <input type="radio" id="3" checked={3==checkRadio}  className="type" name="type"onChange={()=>{
                        setCheckRadio(3)
                        setGBs("512GB")
                        setPrice("40990000")
                        }} />512GB</p>                        
                    <p>40990000₫</p>
                </div>
                    <div className="select_item">
                  
                    <p className="4 GB"> <input type="radio" id="4" checked={4==checkRadio}  className="type" name="type"onChange={()=>{
                        setCheckRadio(4)
                        setGBs("1TB")
                        setPrice("46990000")
                    }
                        } />1TB</p>                        
                    <p>46990000₫</p>
                </div>
                </div>
                <div className="image_choose">
                        <div onClick={()=>setColor("Vàng")} value="Vàng" className={`choose_block ${"Vàng"==color&&"active"}`}>
                        <img src={require('./images/ipvang.jpg')}/>
                            <p>Vàng</p>
                        </div>
                        <div  onClick={()=>setColor("Xanh")} value ="Xanh"className={`choose_block ${"Xanh"==color&&"active"}`}>
                            <img  src={require('./images/ipxanh-1.jpg')}/>
                        <p>Xanh</p>
                        </div>
                </div>
                <div className="uudai_wrapper">
                    <div className="title">Chọn 1 trong 2 khuyến mãi sau</div>
                    <div className="uudai">
                        <p>Lì xì ngay 2.000.000đ áp dụng đến 20/01 </p>
                    </div>
                    <div className="uudai">
                        <p>Trả góp 0% </p>
                    </div>
                    <div className="uudai_bonus">Ưu đãi thêm</div>
                    <ul className="uudai_bonus_item">
                            <li><img src={require("./images/tick_icon.png")} alt="" /><p>Tặng gói iCloud 50GB miễn phí 3 tháng</p> <span className="thongso">  Xem chi tiết</span></li>
                            <li><img src={require("./images/tick_icon.png")} alt="" /><p>Giảm sốc 50% cho gói bảo hành vàng chỉ từ 550.000đ</p><span className="thongso">  Xem chi tiết</span></li>
                            <li><img src={require("./images/tick_icon.png")} alt="" /><p>Thu cũ đổi mới trợ giá 15%</p><span className="thongso">  Xem chi tiết</span></li>
                            <li><img src={require("./images/tick_icon.png")} alt="" /><p>Bảo hành 2 năm chính hãng</p><span className="thongso">  Xem chi tiết</span></li>
                            <li><img src={require("./images/tick_icon.png")} alt="" /><p>Tặng PMH 200.000đ mua Sạc Magsafe</p><span className="thongso">  Xem chi tiết</span></li>
                            <li><img src={require("./images/tick_icon.png")} alt="" /><p>Tặng PMH 300.000đ mua Ốp lưng chính hãng</p><span className="thongso">  Xem chi tiết</span></li>
                    </ul>
                </div>
                <div className="buyBtn_wrapper">
                 <Link to="/cart">
                 <button onClick={BUY} className="buyNow">
                        <div>
                            <strong>MUA NGAY</strong>
                            <p>Giao hàng miễn phí hoặc đặt tại shop</p>
                        </div>
                    </button>
                     </Link>
                    <div className="tragop">
                    <button className="tragop_btn">
                        <div>
                            <strong>MUA NGAY</strong>
                            <p>Giao hàng miễn phí hoặc đặt tại shop</p>
                        </div>
                    </button>
                    <button className="tragop_btn">
                        <div>
                            <strong>MUA NGAY</strong>
                            <p>Giao hàng miễn phí hoặc đặt tại shop</p>
                        </div>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        </>
           
    )
}
export default TrangSP
