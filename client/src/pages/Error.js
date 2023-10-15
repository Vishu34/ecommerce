import { Link } from "react-router-dom"


const Error=()=>{
    return (
        <>
   
   <div className="py-5">
   <img src="errorpage/404.png" alt="img"
        className="mx-auto"
    />
    <h1 className="text-center font-bold text-4xl">oops 404 page not found</h1>
    <Link to="/"> 
    <p className="text-center text-lg my-3 bg-blue-600 text-white
    rounded-md hover:text-blue-500 w-44 p-2 mx-auto">Back to Homepage</p></Link>
   </div>
        </>
    )
}

export default Error