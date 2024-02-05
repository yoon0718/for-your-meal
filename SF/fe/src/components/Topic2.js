import { useEffect, useState } from "react";
import axios from "axios";

function Topic2() {
    useEffect(() => {
        sessionStorage.clear()
        const randommenu = document.querySelector('.topic2randommenu')
        randommenu.addEventListener('click',() => {
            window.location.href = '/randommenu'
        })
        const fastsearch = document.querySelectorAll('.topic2fs')
        fastsearch.forEach((e, index) => {
            e.addEventListener('click',() => {
                sessionStorage.setItem('요리종류',index)
                window.location.href = '/fastsearch'
            })
        })
        const category = document.querySelector('.topic2catesearch')
        category.addEventListener('click',() => {
            const cousinetype = "밥";
            const waytocook = "끓이기";
            const ingredients = "새우";
            sessionStorage.setItem("요리종류",cousinetype)
            sessionStorage.setItem("조리방법",waytocook)
            sessionStorage.setItem("재료",ingredients)
            window.location.href = "/category"
        })
    },[])

    return(
       <div className="topic2wrapper">
        <div className="topic2header">
            <div className="topic2headercontent">헤더</div>
        </div>
        <div className="topic2main">
            <div className="topic2col1">슬라이드</div>
            <div className="topic2col2">
                <div className="topic2catefood">
                    <div className="topic2catecol1">
                        <div className="topic2fs">밥</div>
                        <div className="topic2fs">반찬</div>
                        <div className="topic2fs">국/찌개</div>
                    </div>
                    <div className="topic2catecol2">
                        <div className="topic2fs">일품</div>
                        <div className="topic2fs">후식</div>
                        <div className="topic2fs">기타</div>
                    </div>
                </div>
                <div className="topic2randommenu">랜덤음식</div>
                <div className="topic2expired">유통기한 긴박 음식</div>
            </div>
            <div className="topic2col3">
                <div className="topic2catesearch">카테고리 별 검색</div>
                <div className="topic2addexpiration">유통기한 등록</div>
            </div>
        </div>
       </div>
        )
}
export default Topic2;
