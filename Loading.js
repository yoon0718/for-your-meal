import axios from "axios";
import { useEffect, useState } from "react";
import './css/Loading.css';

function Loading() {
    // dots 상태와 이를 업데이트할 setDots 함수를 정의합니다.
    const [dots, setDots] = useState('');

    useEffect(() => {
        const filename = sessionStorage.getItem("filename");
        if (filename != null) {
            axios.post("http://localhost/loading", filename)
                .then(res => {
                    sessionStorage.setItem("result", res.data);
                    window.location.href = "/emoresult";
                });
        } else {
            alert("비정상적인 접근이 감지되었습니다.");
            window.location.href = "/select";
        }

        // 색상 변경 로직
        var colors = ["purple", "red", "yellowgreen", "blue", "orange"];
        var currentColorIndex = 0;
        var textElement = document.querySelector('.loadingtext');

        function changeColor() {
            if (textElement) {
                textElement.style.color = colors[currentColorIndex];
                currentColorIndex = (currentColorIndex + 1) % colors.length;
            }
        }

        var colorChangeInterval = setInterval(changeColor, 1000);

        // "..." 움직임 로직
        var dotsInterval = setInterval(() => {
            setDots(dots => dots.length < 3 ? dots + '.' : '.');
        }, 1000);

        return () => {
            clearInterval(colorChangeInterval);
            clearInterval(dotsInterval);
        };
    }, []);

    return (
        <div className="loadingcontainer">
            {/* dots 상태를 사용하여 동적으로 텍스트를 업데이트합니다. */}
            <p className="loadingtext">녹음된 당신의 감정을 분석 중입니다{dots}</p>
        </div>  
    );
}

export default Loading;
