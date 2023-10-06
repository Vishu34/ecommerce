const Ads=({mydata})=>{
const {color1,content1,color2,content2,content3, btncolor,btncolor1,btn,img,imgstyle}=mydata
    return(
        <>

        
            
                <div className="space-y-2 ">
                <p className={` text-sm  font-semibold  ${color1}`}>{content1}</p>
                <h1 className={` font-bold text-lg ${color2}`}>
{content2}
                </h1>
                <p className="text-gray-500">{content3}</p>
                <button className={`px-3 py-2 rounded-3xl  font-bold ${btncolor1} ${btncolor}`}>{btn}</button>
                </div>
                <div className="">
                    <img src={img} alt="img" className={`w-[100%] h-[100%] ${imgstyle}`}/>
                </div>
       
  
        </>
    )
}

export default Ads;