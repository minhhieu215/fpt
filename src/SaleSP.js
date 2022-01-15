import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const config = {
    dot:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 4,  
    // autoplay: true,
    // autoplaySpeed: 5000,
  };
function SaleSP({title, sanphams,slider}){
    return (<div className="sale_container">
    <h2 className="sale_title">{title}</h2>
  {    slider&&  <Slider {...config}>
            
{sanphams.map((sanpham,index)=>(
    <div   key={index} className="sanpham ">
        <img className="sanpham_img" src={require(""+sanpham.img+"")}></img>
        <h3 className="tenSanPham">{sanpham.name}</h3>
        <h4 className="giaSanPham">{sanpham.price}</h4>
        <p  className="detail">{sanpham.detail}</p>
    </div>
))}
        </Slider>}
        {slider===false && <div className="sanpham_wrapper">{ sanphams.map((sanpham,index)=>(
    <div   key={index} className="sanpham dl-column">
        <img className="sanpham_img" src={require(""+sanpham.img+"")}></img>
        <h3 className="tenSanPham">{sanpham.name}</h3>
        <h4 className="giaSanPham">{sanpham.price}</h4>
        <p  className="detail">{sanpham.detail}</p>
    </div>
))}
</div>
}
    </div>)
}
export default SaleSP