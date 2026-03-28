import facebook from "../../assets/facebook.svg";
import insta from "../../assets/insta.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
const Profile = () => {
  return (
    <div className="m-[32px]">
      <div className=" relative rounded-t-[10px] h-[300px] bg-[#45437F] w-full  "></div>
      <div className="w-[130px] h-[130px] rounded-full bg-[#615DFA] border-8 border-white  absolute top-[38%] left-[55%]  -translate-x-1/2 -translate-y-1/2 "></div>
      <div className="flex items-center gap-4 absolute  top-[38%] left-[73%]  -translate-y-1/2 ">
        <button className="py-[14px] px-[54px] bg-[#615DFA] text-white  rounded-[7px] ">
          Add Friend
        </button>
        <button className="py-[14px] px-[54px] bg-[#23D2E2] text-white  rounded-[7px] ">
          Add Friend
        </button>
      </div>
      <div className="pt-[65px]  pb-[21px] justify-around  flex items-center  ">
        <div className=" flex items-center justify-center text-center gap-[25px] ">
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

        <div className="  ">
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

        <div className="flex items-center gap-3 ">
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
