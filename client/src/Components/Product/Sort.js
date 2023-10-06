
import { useFilterContext } from "../Context/FilterProducts"


const Sort=()=>{
 const{selectinput,selectchange}=useFilterContext()
    return(
        <>
        <select value={selectinput} onChange={(event)=>selectchange(event.target.value)}
        className="border-2 px-3 py-2 border-blue-600 rounded-md text-sm font-semibold capitalize">
            <option value="lowest">lowest</option>
            <option value="highest">highest</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
        </select>
        </>
    )
    }
export default Sort