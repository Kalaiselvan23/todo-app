import React,{useContext, useState} from "react";
import { themeContext } from "../App";
function BgImage() {
    

    return <div className="bg-mainBg w-[100%] h-[40vh] bg-no-repeat bg-cover relative flex justify-center items-center">
        <div className="w-[35vw] flex justify-between items-center">
            <span className="text-white font-extrabold text-5xl tracking-[15px]">TODO</span>
        </div>
    </div>
}
export default BgImage;