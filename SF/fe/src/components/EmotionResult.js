import axios from "axios";
import { useEffect, useState } from "react";

function EmotionResult() {
    const emotion_dic = {
        '0' : '행복한',
        '1' : '화가난',
        '2' : '불쾌한',
        '3' : '두려운',
        '4' : '평상시의',
        '5' : '슬픈'
    }
    
    const [emotion,setEmotion] = useState(false);
    const [food_image,setImage] = useState(false);
    const [food_name,setName] = useState(false);
    const [food_ingredient,setIngredient] = useState(false);
    const [food_recipe,setRecipe] = useState(false);
    const [food_tip,setTip] = useState(false);
    useEffect(() => {
        const result = sessionStorage.getItem("result")
        axios.post("http://localhost/emotionresult",result)
        .then(res => {
            setEmotion(emotion_dic[res.data["감정"]])
            setImage(res.data["이미지경로"])
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
    },[])

    return(
       <div>
        <div>당신은 오늘 {emotion} 상태이시군요!</div>
        {food_image && <div><img src={food_image} alt="음식 이미지"/></div>}
        <div>메뉴 이름 : {food_name}</div>
        <hr></hr>
        <div>필요한 재료 : {food_ingredient}</div>
        <div>조리 방법 : {food_recipe}</div>
        <div>저감조리법 tip : {food_tip}</div>
        <div>
            <button className="btn">다시 선택</button>
        </div>
       </div>

        )
}
export default EmotionResult;
