import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes,Route, Link, BrowserRouter as Router ,useParams} from 'react-router-dom'  

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
    return (<Link to="trangsp"><div className="sale_container">
    <h2 className="sale_title">{title}</h2>
  {    slider&&  <Slider {...config}>
            
{sanphams.map((sanpham,index)=>(
    <div   key={index} className="sanpham ">
        <div className ="imgblock">
        <img className="sanpham_img" src={require(""+sanpham.img+"")}></img>
        </div>
        <h3 className="tenSanPham">{sanpham.name}</h3>
        <h4 className="giaSanPham">{sanpham.price}</h4>
        <p  className="detail">{sanpham.detail}</p>
        <div className="buy_block">
        <button>Mua ngay</button>
        <button>So sánh</button>
</div>
    </div>
))}
        </Slider>}
        {slider===false && <div className="sanpham_wrapper">{ sanphams.map((sanpham,index)=>(
    <div   key={index} className="sanpham dl-column">
        <div className ="imgblock">
        <img className="sanpham_img" src={require(""+sanpham.img+"")}></img>
        </div>
        <h3 className="tenSanPham">{sanpham.name}</h3>
        <h4 className="giaSanPham">{sanpham.price}</h4>
        <p  className="detail">{sanpham.detail}</p>     
<div className="buy_block">
        <button>Mua ngay</button>
        <button>So sánh</button>
</div>
    </div>
))}
</div>
}
    </div></Link>)
}
export default SaleSP