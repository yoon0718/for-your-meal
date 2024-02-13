import axios from "axios";
import { useState } from "react";

function Ingredient() {
    const add_ingredient = () => {
        const inputvalue = document.querySelector('.input').value
        const data = {"ingredient":inputvalue}
        axios.post("http://10.10.21.89/ingredient",data)
        .then(res => {
            window.location.reload()
        })
    }
    return(
       <div>
        <input className="input" type="text"></input>
        <button onClick={add_ingredient}>추가하기</button>
       </div>
        )
}
export default Ingredient;
