const phukiens = [
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
    {
        img:'./images/archive.png',
        text:'Phụ kiện nổi bật'
    },
]
function PhuKien(){
    return  (
        <div className="sale_container dl-stretch-center flex_wrap  ">
        {phukiens.map((phukien,index)=>(
            <div  className="sale_item2  dl-column" key={index}>
                <img style={{height:"100px", width:'100px'}} src={require(""+phukien.img+"")} alt="HIHI" />
               <p>
               {phukien.text}
                   </p> 
                </div>
        ))}
        </div>
    )
}
export default PhuKien
