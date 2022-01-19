import React from 'react'

const TrangSP = () => {
    return (
        <>
         <h1 className="sp_name">iPhone 13 Pro Max 128GB </h1>
        <div className ="trangsp_wrapper">
            <div className="row_1">
            <div className="sp_img_block dl-center-center">
                <img src={require('./images/iphone13.png')}/>
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
            {/* <div className="row_2">
                <div className="price_block">
                <h1 className="price">31.990.000₫</h1>
                <h2  style= {{display:'inline'}}className="price_before"><strike>33.990.000₫</strike></h2>
                </div>
                <div className ="select">
                    <div className="select_item">
                    <p className="GB">128GB</p>                        
                    <p>31.990.000₫</p>
                </div>
                </div>
            </div> */}
        </div>
        </>
           
    )
}

export default TrangSP
