import axios from "axios";
import { useEffect } from "react";
import './css/Loading.css';


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
            window.location.href = "/select"
        }
    })

    return(
        <div className="loading-container">
        
        </div>  
        )
}
export default Loading;
