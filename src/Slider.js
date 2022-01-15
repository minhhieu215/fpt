import SalePoster from "./SalePoster";
import SliderBackground from './SliderBackground'
import SaleBrand from './SaleBrand' 
import SaleSP from './SaleSP'
import Banner from './Banner'
import PhuKien from "./PhuKien";
import Sim from './Sim'
const sanphams=[
   {
       name:"iPhone 13 Promax",
       price:"31.990.000đ",
       img:"./images/637673213598401263_iphone-13-pro-max-dd-1.png",
       detail:"Giảm thêm 150.000đ khi thanh toán online 100%",
   },
   {
       name:"Samsung Galaxy A52s 5G",
       price:"9.990.000đ",
       img:"./images/637672395068813010_samsung-galaxy-a52s-5g-dd.png",
       detail:"Giảm thêm 150.000đ khi thanh toán online 100%",


   },
   {
       name:"Samsung Galaxy S21 FE 5G 6GB - 128GB",
       price:"14.990.000đ",
       img:"./images/637768861737691256_samsung-galaxy-s21-fe-xanh-dd.png",
       detail:"Giảm thêm 500.000đ cho Samsung Galaxy S21 FE khi thanh toán qua VNPAY ",
   },
   {
       name:"Realme C21y 4GB - 64GB",
       price:"3.420.000đ",
       img:"./images/637679927441675274_realme-c21y-xanh-dd.png",
       detail:"Giảm thêm 150.000đ khi thanh toán online 100%",


   },
   {
       name:"Realme C21y 4GB - 64GB",
       price:"3.420.000đ",
       img:"./images/637679927441675274_realme-c21y-xanh-dd.png",
       detail:"Giảm thêm 150.000đ khi thanh toán online 100%",


   },
   {
       name:"Realme C21y 4GB - 64GB",
       price:"3.420.000đ",
       img:"./images/637679927441675274_realme-c21y-xanh-dd.png",
       detail:"Giảm thêm 150.000đ khi thanh toán online 100%",


   },
   {
       name:"Realme C21y 4GB - 64GB",
       price:"3.420.000đ",
       img:"./images/637679927441675274_realme-c21y-xanh-dd.png",
       detail:"Giảm thêm 150.000đ khi thanh toán online 100%",


   },
   {
       name:"Realme C21y 4GB - 64GB",
       price:"3.420.000đ",
       img:"./images/637679927441675274_realme-c21y-xanh-dd.png",
       detail:"Giảm thêm 150.000đ khi thanh toán online 100%",


   },
]
function Sale(){
return (
   <div className=" ">
       <SalePoster/>
       <SliderBackground/>
    <SaleBrand/>
    <SaleSP slider ={true} title="KHUYẾN MÃI HOT"sanphams={sanphams}/>
    <Banner size="small" url="./images/banner.jfif"/>
    <SaleSP slider={false}title="LAPTOP BÁN CHẠY"sanphams={sanphams}/>
    <Banner size="big" url="./images/bg-banner.png"/>
    <PhuKien/>
    <Sim/>
   </div>
)
}
export default Sale;