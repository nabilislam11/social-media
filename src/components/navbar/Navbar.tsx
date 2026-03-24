import React from 'react'
import logo from "../../assets/logo.png"  
import { VscThreeBars } from 'react-icons/vsc'
import { BsThreeDots } from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className='py-4  px-7 bg-[#615DFA]  flex justify-between items-center gap-[73px] ' >
      <div className="w[45%] flex justify-between  items-center gap-[174px] ">
        <div className="flex items-center gap-3">

        <div className=" ">
          <img src={logo} alt="" />
        </div>
        <p className=" font-bold text-[12px] text-white ">MERNIAN</p>
        </div>
        <div className="flex items-center   gap-12">
          <button><VscThreeBars className='text-white  size-5  '  /></button>
          <p className='font-bold text-[14px] text-white'>Careers</p>
          <p className='font-bold text-[14px] text-white'>Store</p>
          <p className='font-bold text-[14px] text-white'>FAQ</p>
          <button><BsThreeDots className=' text-white' /></button>
        </div>

      </div>
      <div className=" w-[55%] flex justify-between items-center">
        <div className="w-[45%] ">
          <input className='py-[15px] px-[16px]' type="text"  placeholder='Search here ....'/>
        </div>
        <div className="w-[55%]"></div> 
      </div>
    </div>
  )
}

export default Navbar