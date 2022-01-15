
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
const config = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,  
  autoplay: true,
  autoplaySpeed: 2000,

};
function SliderBackground(){
    return  <div className="SliderBackground">
       <Slider {...config}>
       <img className="slider_Img" src={require('./images/hinh1.png')} alt="" />
       <img className="slider_Img"src={require('./images/hinh3.png')} alt="" />
       <img className="slider_Img" src={require('./images/hinh4.png')} alt="" />
       </Slider>
    <div className="slider_items dl-center-center">
  <div className="slider_item">Iphone 13 Pro Max lì xì đến 6 triệu</div>
  <div className="slider_item">Sắm ngay S21 FE 5G ưu đãi đến 6 triệu</div>
  <div className="slider_item">Sắm Reno6Z | Reno6 5G lì xì 500.000Đ</div>
  <div className="slider_item">Laptop gaming giảm đến 3 triệu , tặng chuột</div>
  <div className="slider_item">Hàng Gia dụng lì xì đến 6 triệu</div>
  <div className="slider_item">Sắm Xiaomi lì xì đến 1,5 triệu</div>
  <div className="slider_item">Sắm vivo lì xì đến 1,5 triệu</div>
    </div>
</div>
}
export default SliderBackground