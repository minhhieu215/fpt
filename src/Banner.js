const banner_sp =[
    {
        img:'./images/637672395068813010_samsung-galaxy-a52s-5g-dd.png',
        name:"APPLE",
        text:'LÌ XÌ ĐẾN'
    },{
        img:'./images/637672395068813010_samsung-galaxy-a52s-5g-dd.png',
        name:"APPLE",
        text:'LÌ XÌ ĐẾN'
    },{
        img:'./images/637672395068813010_samsung-galaxy-a52s-5g-dd.png',
        name:"APPLE",
        text:'LÌ XÌ ĐẾN'
    },{
        img:'./images/637672395068813010_samsung-galaxy-a52s-5g-dd.png',
        name:"APPLE",
        text:'LÌ XÌ ĐẾN'
    },
]
function Banner({size,url}){
    console.log(url)
    return (
        <div className={`banner ${size}`}>
            {size==="big"&&
            <div className='banner_title dl-column'>
   <img src={require('./images/html-title.png')}/>  
   <p className="text_banner">Áp dụng: 14/01 - 16/01</p>

    <div className="list_bannerSp dl-center-center">
        {banner_sp.map((sp,index)=>
            <div key={index}className="list_bannerSp_item">
                <img src={require(""+sp.img+"")}/>
                <h1>{sp.name}</h1>
                <span >{sp.text} <span style={{color:"red"}}>3,5 TRIỆU</span></span>
            </div>
        )}
    </div>
   <img src={require("./images/des-sub-text.png")}/>
   </div>
         
            }
        </div>
    )
}

export default Banner