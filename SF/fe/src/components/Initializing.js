import axios from "axios";
import { useEffect } from "react";

function Initializing() {
    useEffect(() => {
        axios.post("http://10.10.21.89/initializing")
        .then(res => {
            window.location.href = "/select"
        })
    })

    return(
       <div>
       장치를 초기화중입니다!
      </div>
        )
}
export default Initializing;
