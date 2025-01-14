import { HiOutlineSparkles } from "react-icons/hi";
import { GoShareAndroid } from "react-icons/go";
import { MdOutlineFileDownload, MdOutlineTableRows } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { TbColumns3, TbArrowsSort } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";

import { tableData, colData } from "../const/data";

const Header = () => {
  return (
    <div className="flex sm:flex-col items-center sm:items-start sm:gap-2 justify-between px-4 py-3 border-b bg-white w-full">
      <div className="flex lg:flex-col items-center lg:items-start gap-x-6 gap-y-1">
        <div className="flex items-center gap-2 px-2 bg-gray-50 border border-gray-300 rounded-lg w-80 md:w-full">
          <IoMdSearch className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full text-[14px] text-gray-500 bg-transparent pl-1 py-1 outline-none"
          />
        </div>
        <div className="text-[12px] text-gray-800 flex flex-wrap items-center gap-2 font-medium">
          <div className="flex items-center gap-1 pr-2 lg:pr-1">
            <MdOutlineTableRows className="w-4 h-4"/>
            <span>{tableData.length}/{tableData.length} Row</span>
          </div>
          <div className="flex items-center gap-1 px-2 lg:px-1">
            <TbColumns3 className="w-4 h-4"/>
            <span>{colData.length}/{colData.length} Columns</span>
          </div>
          <div className="flex items-center gap-1 py-1 px-2 lg:px-1 rounded-md hover:bg-gray-200">
            <FiFilter className="w-4 h-4"/>
            <span>Filter</span>
          </div>
          <div className="flex items-center gap-1 py-1 px-2 lg:px-1 rounded-md hover:bg-gray-200">
            <TbArrowsSort className="w-4 h-4"/>
            <span>Sort</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button className="flex items-center gap-1 bg-gray-800 text-white text-[12px] font-medium py-2 px-3 rounded-lg hover:bg-gray-900 mr-3 md:mr-2">
          <HiOutlineSparkles />
          <span>Enrich</span>
        </button>
        <button className="text-gray-800 p-2 md:p-1 rounded hover:bg-gray-200">
          <GoShareAndroid />
        </button>
        <button className="text-gray-800 p-2 md:p-1 rounded hover:bg-gray-200">
          <MdOutlineFileDownload />
        </button>
        <button className="text-red-600 p-2 md:p-1 rounded hover:bg-red-100">
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default Header;