const brands=[
    {
        img:'./images/apple.png',
        title:"Điện thoại",
    },     {
        img:'./images/apple.png',
        title:"Điện thoại",
    },     {
        img:'./images/apple.png',
        title:"Điện thoại",
    },     {
        img:'./images/apple.png',
        title:"Điện thoại",
    },     {
        img:'./images/apple.png',
        title:"Điện thoại",
    },     {
        img:'./images/apple.png',
        title:"Điện thoại",
    },    
     {
        img:'./images/apple.png',
        title:"Điện thoại",
    }, 
    {
        img:'./images/apple.png',
        title:"Điện thoại",
    }, 
]
function SaleBrand(){
    return  <div className="sale_container dl-stretch-center flex_wrap  ">
        {brands.map((brand,index)=>(
            <div  className="sale_item  dl-column" key={index}>
                <img  src={require(""+brand.img+"")} alt="HIHI" />
               <p>
               {brand.title}
                   </p> 
                </div>
        ))}
        </div>
    
}
export default SaleBrand