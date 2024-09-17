import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { FaRegSun } from "react-icons/fa";

function ToggleMode({darkMode, setDarkMode}) {
    function changeMode() {
        setDarkMode(!darkMode);
    }

    return (
        <div className='flex items-center justify-center my-4 cursor-pointer bg-blue-300 dark:bg-orange-800 w-[100px] py-2 mx-auto' onClick={changeMode}>
            {darkMode ? <FaRegSun size={42}/> : <MdDarkMode size={42}/>}
        </div>
    );
}

export default ToggleMode;
