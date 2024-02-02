import axios from "axios";
import { useEffect, useState } from "react";

function RandomMenu() {
    const [selected, setSelected] = useState(null);
    const [food_image,setImage] = useState(null);
    const [food_name,setName] = useState(null);
    const [food_ingredient,setIngredient] = useState(null);
    const [food_recipe,setRecipe] = useState(null);
    const [food_tip,setTip] = useState(null);
    
    useEffect(() => {
        axios.post("http://localhost/randommenu")
        .then(res => {
            setSelected(res.data['선택된재료'])
            setImage(res.data['이미지경로'])
            setName(res.data['메뉴명'])
            setIngredient(res.data['재료정보'])
            setRecipe(res.data['만드는법'])
            setTip(res.data['저감조리법tip'])  
        })
    },[])

    useEffect(() => {
        const reset_btn = document.querySelector('.btn')
        reset_btn.addEventListener("click",() => {
            window.location.reload();
        })
        const home_btn = document.querySelector('.home')
        home_btn.addEventListener("click", () => {
                window.location.href = '/'
        })
    },[])

    return(
        <div>
            <div>
                선택된 재료는 {selected}입니다.
            <br/>
                해당 재료로 만들 수 있는 요리는 다음과 같습니다.
            </div>
            {food_image && <div><img src={food_image} alt="음식 이미지"/></div>}
            <div>메뉴 이름 : {food_name}</div>
            <hr></hr>
            <div>필요한 재료 : {food_ingredient}</div>
            <div>조리 방법 : {food_recipe}</div>
            <div>저감조리법 tip : {food_tip}</div>
            <div>
                <button className="btn">다시 선택</button>
            </div>
            <div>
                <button className='home' type='submit'>홈으로</button>
            </div>
        </div>
        )
}
export default RandomMenu;
