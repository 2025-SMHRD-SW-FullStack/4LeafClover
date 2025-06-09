import React, { useRef, useState } from 'react'

const ImageChangeExam = () => {

    let select = useRef("");
    let imgRef = useRef("");
    // const[img, setImg] = useState("");
    // let img = useRef("");

    const change = (e) =>{
        e.preventDefault();
        console.log(select.current.value);
        if(select.current.value ==="처음"){
            imgRef.current.src="/src/img/FFXIV_Alex_Prime.webp"
            // setImg("/src/img/FFXIV_Alex_Prime.webp");
            // img.current="/src/img/FFXIV_Alex_Prime.webp"
            
        }
        if(select.current.value =="변신"){
            imgRef.current.src="/src/img/FFXIV_Perfect_Alexander.webp"
            // setImg("/src/img/FFXIV_Perfect_Alexander.webp");
            // img.current="/src/img/FFXIV_Perfect_Alexander.webp"
            
        }

        //입력창의 내용을 초기화하고 해당 요소를 선택(focus)하는 기능
        select.current.value='';
        select.current.focus();

    }

    return (
        <div>
            <h1>희망하는 사진이 있으신가요?</h1>
            <div>
                <form action="">
                    <input type="text" ref={select} />
                    <input type="submit" value="변경!" onClick={change}/>
                </form>
                <img ref={imgRef} src="/src/img/FFXIV_Alex_Prime.webp" alt="" />
                {/* <img src="/src/img/FFXIV_Alex_Prime.webp" alt="" /> */}
            </div>
        </div>
    )
}

export default ImageChangeExam