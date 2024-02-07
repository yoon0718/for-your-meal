import axios from "axios";
import { useEffect, useState } from "react";

function EmotionResult() {
    const emotion_dic = {
        '0' : '화가 난',
        '1' : '불쾌한',
        '2' : '두려운',
        '3' : '행복한',
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
        const filename = sessionStorage.getItem("filename")
        const result = sessionStorage.getItem("result")
        if (result != null) {
            axios.post("http://localhost/emotionresult",{filename:filename, result:result})
            .then(res => {
                setEmotion(emotion_dic[result])
                setImage(res.data["이미지경로"])
                setName(res.data['메뉴명'])
                setIngredient(res.data['재료정보'])
                setRecipe(res.data['만드는법'])
                setTip(res.data['저감조리법tip'])
            })
        }
        else {
            alert("비정상적인 접근이 감지되었습니다.")
            window.location.href = "/"
        }
    },[])
    useEffect(() => {
        const reset_btn = document.querySelector('.btn')
        reset_btn.addEventListener("click",() => {
            window.location.reload();
        })
        const home_btn = document.querySelector('.home')
        const filename = sessionStorage.getItem("filename")
        const result = sessionStorage.getItem("result")
        home_btn.addEventListener("click", () => {
            axios.post('http://localhost/emotionresult', {filename:filename, result:result}, {
                params: { home: true }
            })
            .then(res => {
                sessionStorage.clear()
                window.location.href = '/'
            })
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
        <div>
            <button className='home' type='submit'>홈으로</button>
        </div>
       </div>

        )
}
export default EmotionResult;
