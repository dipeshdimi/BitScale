import {
  HiOutlineSparkles,
  GoShareAndroid,
  MdOutlineFileDownload,
  MdOutlineTableRows,
  RiDeleteBin6Line,
  IoMdSearch,
  TbColumns3,
  TbArrowsSort,
  FiFilter,
} from '../icons';

import PropTypes from "prop-types";


const Header = ({ tabData, columns, setTabData, setColumns, searchTerm, setSearchTerm, reverse, setReverse }) => {
  return (
    <div className="flex sm:flex-col items-center sm:items-start sm:gap-2 justify-between px-4 py-3 border-b bg-white w-full">
      <div className="flex lg:flex-col items-center lg:items-start gap-x-6 gap-y-1">
        <div className="flex items-center gap-2 px-2 bg-gray-50 border border-gray-300 rounded-lg w-80 md:w-full">
          <IoMdSearch className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-[14px] text-gray-500 bg-transparent pl-1 py-1 outline-none"
          />
        </div>
        <div className="text-[12px] text-gray-800 flex flex-wrap items-center gap-x-2 gap-y-1 font-medium select-none">
          <div className="flex items-center gap-1 pr-2 lg:pr-1">
            <MdOutlineTableRows className="w-4 h-4" />
            <span>{tabData.length}/{tabData.length} Row</span>
          </div>
          <div className="flex items-center gap-1 px-2 lg:px-1">
            <TbColumns3 className="w-4 h-4" />
            <span>{columns.length}/{columns.length} Columns</span>
          </div>
          <div className="flex items-center gap-1 py-1 px-2 lg:px-1 rounded-md hover:bg-gray-200">
            <FiFilter className="w-4 h-4" />
            <span>Filter</span>
          </div>
          <div
            className="flex items-center gap-1 py-1 px-2 lg:px-1 rounded-md hover:bg-gray-200"
            onClick={() => setReverse(prevState => !prevState)}
          >
            <TbArrowsSort className={`w-4 h-4 ${reverse && 'text-[#0E9F6E]'}`} />
            <span className={`${reverse && 'text-[#0E9F6E]'}`}>Sort</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 select-none">
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
        <button
          className="text-red-600 p-2 md:p-1 rounded hover:bg-red-100"
          onClick={() => {
            setTabData([]);
            setColumns([]);
          }}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  tabData: PropTypes.arrayOf(
    PropTypes.shape({
      input: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      enrich: PropTypes.string.isRequired,
    })
  ).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  setTabData: PropTypes.func.isRequired,
  setColumns: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  reverse: PropTypes.bool.isRequired,
  setReverse: PropTypes.func.isRequired,
};

export default Header;