import { useState } from "react";

const Myimage=()=>{
    const data = [
    {
      id: 1,
      url:
        "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg"
    },
    {
      id: 2,
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6wSm8mejM9VjRaQ1mC9xY2gYWC0Y-E5zUvJ93TCRafaNwueI3Pz8dZL4kjoI_ULHFvY&usqp=CAU"
    },
    {
      id: 3,
      url:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/49-cell-titanium-alpine-orange-ultra_GEO_IN?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1661626552013"
    },
    {
        id: 4,
        url:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
      }
  ];

   const[newimage,setimage]=useState(data[0].url)


   let imageclick=(url)=>{
  setimage(url)
   }
    return(
        <>
           <div className="grid grid-cols-1 lg:grid-cols-2 content-center gap-5 bg-green-50 p-3  rounded-md ">
          <div className="grid grid-cols-4 lg:grid-cols-1 gap-1 ">
          {
            data.map(elm=>{
                return(
                    <>
                       
                           
                           <div className="p-1 bg-slate-100 rounded-md"> <img src={elm.url} alt="img" className="w-[100%] h-32 object-cover" onClick={()=>imageclick(elm.url)}/></div>
                        
                    </>
                )
            })
           }
          </div>
        <div className="bg-gray-100 rounded-md p-1 lg:place-self-center ">  <img src={newimage} className=" object-cover lg:w-[300px] w-[100%] h-[300px]" alt="img"/></div>
           </div>
        </>
    )
}

export default Myimage;