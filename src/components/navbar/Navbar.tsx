import logo from "../../assets/logo.png"  
import { VscThreeBars } from 'react-icons/vsc'
import { BsThreeDots } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { MdShoppingCart } from "react-icons/md"
import { FaSms } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io"
import vactor from '../../assets/vactor.svg'
const Navbar = () => {
  return (
    <div className='py-4  px-7 bg-[#615DFA]  flex justify-between items-center gap-[73px] ' >
      <div className="w-[35%] flex justify-between  items-center gap-[174px] ">
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
      <div className=" w-[55%] flex justify-between items-center gap-20">
        <div className="w-[40%] ">
       <div className="relative w-[300px]">
  <input
    type="text"
    placeholder="Search here..."
    className="w-full py-2 pl-4 pr-10 rounded-md bg-[#4E4AC8] text-white placeholder-[#6965E0] outline-none"
  />

  {/* Search Icon */}
  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6763DF]">
  <CiSearch />
    
  </span>
</div>

        </div>
        <div className="w-[55%] flex items-center justify-between gap-10">
          <div className="w-[25%]">
            <div className="flex justify-between items-center gap-11 ">
              <p className="font-poppins text-[12px] font-normal ">Next</p>
              <p className="font-poppins text-[12px] font-normal">35 EXP</p>
            </div>
            <div className=" relative  h-[3px] rounded-lg w-full bg-[#4E4AC8] after:content-['']  after:absolute after:h-[3px] after:rounded-lg after:w-[50%] after:bg-[#41EFFF]  "></div>

          </div>
          <div className="w-[30] flex justify-between items-center gap-8 ">
            <div className="w-[1px]  h-[32px] bg-[#7A77FD] "></div>

<MdShoppingCart className="text-[#7A77FD]" />
<FaSms className="text-[#7A77FD]" />
<IoIosNotifications className="text-[#7A77FD]" />
 <div className="w-[1px] h-[32px] bg-[#7A77FD] "></div>
<img src={vactor} alt="" />
          </div>
          </div> 
      </div>
    </div>
  )
}

export default Navbar