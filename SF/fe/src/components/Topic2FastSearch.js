import axios from "axios";
import { useEffect, useState } from "react";

function Topic2FastSearch() {
    const [food1, setFood1] = useState(false);
    const [food2, setFood2] = useState(false);
    const [food3, setFood3] = useState(false);
    const [food4, setFood4] = useState(false);
    const [food5, setFood5] = useState(false);
    const [food6, setFood6] = useState(false);
    
    useEffect(() => {
        const cousinetype = sessionStorage.getItem('요리종류')
        axios.post("http://localhost/fastsearch",cousinetype)
        .then(res => {
            setFood1(res.data['menu1'])
            setFood2(res.data['menu2'])
            setFood3(res.data['menu3'])
            setFood4(res.data['menu4'])
            setFood5(res.data['menu5'])
            setFood6(res.data['menu6'])
        })
    },[])
    
    return(
       <div className="fswrapper">
        <div className="fscol1">
            <div className="fsfood1">
                {food1['이미지경로'] && <div className="fsfoodimg"><img src={food1['이미지경로']} alt="음식이미지"></img></div>}
                <div className="fsfoodname">
                    <div>{food1['메뉴명']}</div>
                </div>
            </div>
            <div className="fsfood2">
                {food2['이미지경로'] && <div className="fsfoodimg"><img src={food2['이미지경로']} alt="음식이미지"></img></div>}
                <div className="fsfoodname">
                    <div>{food2['메뉴명']}</div>
                </div>
            </div>
            <div className="fsfood3">
                {food3['이미지경로'] && <div className="fsfoodimg"><img src={food3['이미지경로']} alt="음식이미지"></img></div>}
                <div className="fsfoodname">
                    <div>{food3['메뉴명']}</div>
                </div>
            </div>
        </div>
        <div className="fscol2">
        <div className="fsfood4">
                {food4['이미지경로'] && <div className="fsfoodimg"><img src={food4['이미지경로']} alt="음식이미지"></img></div>}
                <div className="fsfoodname">
                    <div>{food4['메뉴명']}</div>
                </div>
            </div>
            <div className="fsfood5">
                {food5['이미지경로'] && <div className="fsfoodimg"><img src={food5['이미지경로']} alt="음식이미지"></img></div>}
                <div className="fsfoodname">
                    <div>{food5['메뉴명']}</div>
                </div>
            </div>
            <div className="fsfood6">
                {food6['이미지경로'] && <div className="fsfoodimg"><img src={food6['이미지경로']} alt="음식이미지"></img></div>}
                <div className="fsfoodname">
                    <div>{food6['메뉴명']}</div>
                </div>
            </div>
        </div>
       </div>
        )
}
export default Topic2FastSearch;
