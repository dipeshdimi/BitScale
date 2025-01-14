import { TbTableDashed } from "react-icons/tb";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { PiIntersectDuotone } from "react-icons/pi";
import { BsCreditCard } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="w-16 px-4 bg-gray-100 flex flex-col justify-between py-4 border-r">
      <div className="flex flex-col items-center space-y-4">
        <button className="text-gray-700 hover:text-blue-600">
          <TbTableDashed className="w-6 h-6"/>
        </button>
        <button className="text-gray-700 hover:text-blue-600">
          <IoExtensionPuzzleOutline className="w-6 h-6"/>
        </button>
        <button className="text-gray-700 hover:text-blue-600">
          <PiIntersectDuotone className="w-6 h-6"/>
        </button>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <button className="text-gray-700 hover:text-blue-600">
          <BsCreditCard className="w-6 h-6"/>
        </button>
        <button className="text-gray-700 hover:text-blue-600">
          <BiCoinStack className="w-6 h-6 text-pink-800"/>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;