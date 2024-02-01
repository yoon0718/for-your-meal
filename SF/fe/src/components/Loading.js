import axios from "axios";
import { useEffect } from "react";

function Loading() {
    useEffect(() => {
        const filename = sessionStorage.getItem("filename")
        if (filename != null)
        axios.post("http://localhost/loading",filename)
        .then(res => {
            sessionStorage.setItem("result",res.data)
            window.location.href = "/emoresult"
        })
        else {
            alert("비정상적인 접근이 감지되었습니다.")
            window.location.href = "/"
        }
    })

    return(
       <div>
       당신의 감정을 분석중이에요! 잠시만 기다려주세요!
      </div>
        )
}
export default Loading;
