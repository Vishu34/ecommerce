import Ads from "../Ads";

const Gaming=({data})=>{
data={
    
        bgcolor:"black",
        color1:"text-blue-600",
        color2:"text-white",
        btncolor:"bg-blue-700",
        btncolor1:"text-white",
        content1: "NEW TECHNOLOGIEIS",
        content2: "WEBCAMPS 2023",
        content3:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque repellendus quaerat mollitia quia officia voluptatem ut reiciendis ipsum delectus numquam.",
        btn:"Shop More",
    img:"home/dualshok.png.webp" ,
    imgstyle:"absolute  right-1  md:top-24 w-[100%] md:w-[50%] h-[300px] md:h-[100%]"

 
}
    return(
        <>

<section className="px-8 md:px-16 xl:px-32  py-5 ">

<div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-black p-5 space-y-5 relative rounded-md Gaming h-[640px] md:h-[100%]">
<Ads mydata={data}/>
</div>
</section>
        </>
    )
}

export default Gaming;