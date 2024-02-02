import { useEffect, useState } from "react";
import CateModal from "./CateModal"

function Topic2() {
    const [modal,setModal] = useState(false);
    useEffect(() => {
        const randommenu = document.querySelector('.topic2randommenu')
        randommenu.addEventListener('click',() => {
            window.location.href = '/randommenu'
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
                <div className="topic2catefood" onClick={() => {setModal(true)}}>
                    카테고리 별 음식
                </div>
                <div className="topic2randommenu">랜덤음식</div>
                <div className="topic2expired">유통기한 긴박 음식</div>
            </div>
            <div className="topic2col3">
                <div className="topic2catesearch">카테고리 별 검색</div>
                <div className="topic2addexpiration">유통기한 등록</div>
            </div>
        </div>
        <CateModal setModal={setModal} modal={modal}></CateModal>
       </div>
        )
}
export default Topic2;
