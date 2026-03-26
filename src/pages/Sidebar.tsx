import { FaGopuram, FaNewspaper, FaUserFriends } from "react-icons/fa";
import newsfeed from "../assets/newspaper.svg";
import {
  LiaAmericanSignLanguageInterpretingSolid,
  LiaLayerGroupSolid,
} from "react-icons/lia";
import { FiLogOut } from "react-icons/fi";
const Sidebar = () => {
  return (
    <>
      <div className=" ">
        <div className="relative  w-full h-[75px]  bg-[#45437F]"></div>
        <div className=" absolute top-[100px] left-[5%]    rounded-full w-[120px] h-[120px] border-4 border-white bg-[#615DFA] "></div>
        <div className=" pl-[24px] pr-[8px] ">
          <div className="pt-[75px] text-center ">
            <p className="font-poppins font-bold text-[16px] text-[#000000]">
              A B M Shawon Islam
            </p>
            <p
              className="font-poppins font-medium text-[12px] 
        text-[#AFB0C0]"
            >
              www.abm.com
            </p>
          </div>
          <div className="pt-[42px] flex items-center justify-center text-center gap-[25px] ">
            <div className="">
              <p className="font-poppins font-bold text-[16px] text-[#000000]">
                930
              </p>
              <p
                className="font-poppins font-medium text-[12px] 
        text-[#AFB0C0]"
              >
                Friends
              </p>
            </div>
            <div className="w-[1px] h-[25px] bg-[#AFB0C0] "></div>
            <div className="">
              <p className="font-poppins font-bold text-[16px] text-[#000000]">
                930
              </p>
              <p
                className="font-poppins font-medium text-[12px] 
        text-[#AFB0C0]"
              >
                Friends
              </p>
            </div>
            <div className="w-[1px] h-[25px] bg-[#AFB0C0] "></div>
            <div className="">
              <p className="font-poppins font-bold text-[16px] text-[#000000]">
                930
              </p>
              <p
                className="font-poppins font-medium text-[12px] 
        text-[#AFB0C0]"
              >
                Friends
              </p>
            </div>
          </div>
          <div className="">
            <div className=" hover:bg-[#23D2E2] hover:text-white  text-[#AFB0C0]  py-[15px] p-[20px] flex items-center   gap-7 rounded-[10px]">
              <FaNewspaper />
              <p
                className="font-poppins font-semibold text-[14px] 
        "
              >
                Newsfeed
              </p>
            </div>
            <div className=" hover:bg-[#23D2E2] hover:text-white  text-[#AFB0C0]  py-[15px] p-[20px] flex items-center   gap-7 rounded-[10px]">
              <FaGopuram />
              <p
                className="font-poppins font-semibold text-[14px] 
        "
              >
                Videos
              </p>
            </div>
            <div className=" hover:bg-[#23D2E2] hover:text-white  text-[#AFB0C0]  py-[15px] p-[20px] flex items-center   gap-7 rounded-[10px]">
              <LiaLayerGroupSolid />
              <p
                className="font-poppins font-semibold text-[14px] 
        "
              >
                Groups
              </p>
            </div>
            <div className=" hover:bg-[#23D2E2] hover:text-white  text-[#AFB0C0]  py-[15px] p-[20px] flex items-center   gap-7 rounded-[10px]">
              <FaUserFriends />
              <p
                className="font-poppins font-semibold text-[14px] 
        "
              >
                Friends
              </p>
            </div>
            <div className=" hover:bg-[#23D2E2] hover:text-white  text-[#AFB0C0]  py-[15px] p-[20px] flex items-center   gap-7 rounded-[10px]">
              <LiaAmericanSignLanguageInterpretingSolid />
              <p
                className="font-poppins font-semibold text-[14px] 
        "
              >
                Friends Request
              </p>
            </div>
            <div className=" hover:bg-[#23D2E2] hover:text-white  text-[#AFB0C0]  py-[15px] p-[20px] flex items-center   gap-7 rounded-[10px]">
              <FiLogOut />
              <p
                className="font-poppins font-semibold text-[14px] 
        "
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
