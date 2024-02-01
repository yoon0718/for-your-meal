import axios from "axios";
import { useEffect } from "react";

function Loading() {
    useEffect(() => {
        const filename = sessionStorage.getItem("filename")
        axios.post("http://localhost/loading",filename)
        .then(res => {
            sessionStorage.setItem("result",res.data)
            window.location.href = "/emoresult"
        })
    })

    return(
       <div>
       당신의 감정을 분석중이에요! 잠시만 기다려주세요!
      </div>
        )
}
export default Loading;
