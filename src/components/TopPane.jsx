/* eslint-disable react/prop-types */
import { FaArrowLeft } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";

const ToggleBar = ({autoSave, setAutoSave}) => {
  return (
    <div className="flex ml-auto items-center border-unHighlightDark p-2 w-fit">
      <label htmlFor="autosave-toggle" className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          id="autosave-toggle"
          className="sr-only"
          checked={autoSave}
          onChange={() => setAutoSave(prevState => !prevState)}
        />
        <div className={`block ${autoSave ? 'bg-[#0E9F6E]' : 'bg-gray-500'} w-10 h-6 rounded-full`}></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-200 ${autoSave && 'translate-x-4 b-blue-500'}`}
        />
      </label>
      <span className={`text-[14px] font-medium ${autoSave ? 'text-[#0E9F6E]' : 'text-gray-500'} ml-2`}>Auto Save</span>
    </div>
  )
}

const TopPane = ({ autoSave, setAutoSave }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-50">
      <div className="flex items-center gap-4">
        <button className="">
          <FaArrowLeft />
        </button>
        <h1 className="text-[14px] text-gray-500">Name of the file</h1>
      </div>

      <div className="flex items-center space-x-4">
        <ToggleBar autoSave={autoSave} setAutoSave={setAutoSave} />
        <RiUserLine className="text-orange-600 bg-orange-100 rounded-full w-8 h-8 p-2" />
      </div>
    </div>
  );
};

export default TopPane;