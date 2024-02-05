import axios from "axios";
import { useEffect, useState } from "react";

function Topic2FastSearch() {
    
    const [recipe, setRecipe] = useState(false);
    
    useEffect(() => {
        const cousinetype = sessionStorage.getItem("요리종류")
        const waytocook = sessionStorage.getItem("조리방법")
        const ingredients = sessionStorage.getItem("재료")

        axios.post("http://localhost/category",{"요리종류":cousinetype,"조리방법":waytocook,"재료":ingredients})
        .then(res => {
            setRecipe(res.data)
            console.log(res.data)
        })
    },[])
    if (recipe)
    return(
       <div className="fswrapper">
        <div>테스트</div>
       </div>
        )
}
export default Topic2FastSearch;
