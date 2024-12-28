import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
export default function Navbar(){
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    return<>
    <div className="fixed z-10 w-full bg-white py-7 right-0 left-0 ">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <p className='Fleur text-4xl font-normal '>Portfolio</p>
                    </div>
                    <div className='hidden md:flex space-x-8'>
                        <a href='#About' className='font-normal border-b-4 border-transparent hover:border-[#009379] hover:text-[#009379] '>About</a>
                        <a href='#Work' className='font-normal border-b-4 border-transparent hover:border-[#009379] hover:text-[#009379]'>Work</a>
                        <a href='#Contact' className='font-normal border-b-4 border-transparent hover:border-[#009379] hover:text-[#009379]'>Contact</a>
                    </div>
                    <button onClick={toggleVisibility} id='mobile-btn' className='md:hidden text-3xl pr-5'>
                        <IoMenu />
                    </button>
                </div>

                {isVisible && (
                    <div className="md:hidden absolute top-20 left-0 right-0 flex flex-col items-center w-full bg-[#009379] py-8 border-t border-gray-300">
                        <a href='#About' className=' text-center font-normal border-b-4 border-transparent hover:border-white hover:text-white py-2'>About</a>
                        <a href='#Work' className=' text-center font-normal border-b-4 border-transparent hover:border-white hover:text-white py-2'>Work</a>
                        <a href='#Contact' className=' text-center font-normal border-b-4 border-transparent hover:border-white hover:text-white py-2'>Contact</a>
                    </div>
                )}
            </div>
    </>
}