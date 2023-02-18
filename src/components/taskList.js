import React, { useState } from "react";
import { RiAddBoxFill } from "react-icons/ri";
import {AiOutlineClose} from "react-icons/ai";
function TaskList() {
    const [isEnter, setEnter] = useState(false);
    const [inputText, setInput] = useState("");
    const [todo, setTodo] = useState([]);
    const [hoverIndex,setHoverIndex]=useState(null);
    const handleEnter = (e) => {
        console.log("hello world")
        if (inputText === "") {
            return;
        }
        setEnter((prev) => { return !prev });
        setTodo((prev) => [...prev, inputText]);
        setInput("");
    }
    const handleChange = (e) => {
        let val = e.target.value;
        setInput(val);
    }
    function deleteTask(index){
        // setTodo((prev)=>{
        //     prev.splice(index,1);
        //     return prev;
        // })
        console.log(index);

    }
    const getTodo = (item,index) => {
        const hoverStyle=(hoverIndex===index)?"block":"hidden";
        return <div id={index} className="cursor-pointer list-none text-[#B9BBD4] flex h-14 w-[35vw] border-b-2 border-[#35374C] font-xl items-center" key={index} onMouseOver={()=>setHoverIndex(index)} onMouseOut={()=>setHoverIndex(null)}>
            <input type="checkbox" className="h-6 w-7 ml-3 my-auto bg-slate-400 checkbox mr-3" name={index} />
            <label for={index} className="font-bold w-[30vw]">{item}</label>
            <AiOutlineClose className={"mr-3 text-[#B9BBD4] font-bold text-2xl "+hoverStyle} onClick={()=>deleteTask(index)}/>
        </div>
    }
    return <div>
        <div className="absolute top-[28vh] left-[32.5vw] bg-[#25273C] h-14 w-[35vw] flex rounded-md">
            {/* <input type="checkbox" className="h-6 w-7 ml-3 my-auto bg-slate-400 checkbox" onChange={handleEnter}/> */}
            <input className="bg-[#25273C] h-14 w-[35vw] text-[#7DA1AF] rounded-md p-4 focus:outline-none font-bold" placeholder="Create a new todo..." onChange={handleChange} value={inputText} />
            <RiAddBoxFill className="text-4xl text-[#52546C] mx-2 my-2" onClick={handleEnter} />
        </div>
        <div className="w-[35vw] bg-[#25273C] absolute left-[32.5vw] top-72 rounded-md">
            <div>{todo.map(getTodo)}</div>
            <div className="menu-bottom text-[#585976] font-bold flex m-4 text-sm ">
                <span className="menu-span">{todo.length} Items left</span>
                <div className="flex w-56 justify-between mx-auto">
                    <span className="menu-span">All</span>
                    <span className="menu-span">Active</span>
                    <span className="menu-span">Completed</span>
                </div>
                <span className="menu-span">Clear completed</span>
            </div>
        </div>
    </div>
}
export default TaskList;