import reward from "../images/medal.png";
import amazon from "../images/amazon.png";
import flipkart from "../images/flipkart.png";
import roblox from "../images/roblox.png";
// import Navbar from "./Navbar";

const Reward = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-gradient-to-r from-green-500 to-green-200 h-[30vh]">
        <div className="max-w-[1280px] mx-auto h-full flex items-center">
          <div className="flex justify-between items-center w-[600px] mx-auto">
            <div className="">
              <h1 className="text-[40px] font-semibold">Hi User</h1>
              <p>Level 1</p>
            </div>
            <div className="flex">
              <div>
                <img src={reward} className="w-[60px]" />
              </div>
              <div>
                <h1>Available Points</h1>
                <p className="text-[25px]">2000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto mt-6">
        <div className="grid grid-cols-3 place-items-center">
          <div className="max-w-xs rounded overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl">
            <img className="w-full" src={amazon} alt={"hello"} />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">
                Amazon Pay Gifts Card India
              </div>
              <p className="text-gray-700 text-base">5000 Points</p>
            </div>
          </div>

          <div className="max-w-xs rounded overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl">
            <img className="w-[315px]" src={flipkart} alt={"hello"} />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">Flipkart Gift Card</div>
              <p className="text-gray-700 text-base">7000 Points</p>
            </div>
          </div>

          <div className="max-w-xs rounded overflow-hidden shadow-xl hover:scale-105 hover:shadow-2xl">
            <img className="w-[315px]" src={roblox} alt={"hello"} />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">Roblox Digital Card</div>
              <p className="text-gray-700 text-base">8500 Points</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reward;
