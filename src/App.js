import React, { useState,createContext } from "react";
import { MdLightMode } from "react-icons/md";
import BgImage from "./components/bgImage";
import TaskList from "./components/taskList.js";
export const themeContext=createContext();
function App() {
  const [mode,setMode]=useState('dark');
  
  const handleMode=()=>{
    setMode('light');
    console.log("Button is clicked");
  }
  return (
    <themeContext.Provider value={mode}>
    <div className="bg-[#181824] h-[100vh] w-[100%]">
      <BgImage />
      <MdLightMode className="text-white text-3xl absolute left-[64vw] top-[19vh]" onClick={handleMode}/>
      <TaskList />
    </div>
    </themeContext.Provider>
  );
}

export default App;
