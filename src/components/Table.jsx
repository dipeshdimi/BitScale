import { useState } from "react";
import PropTypes from "prop-types";
import {
  FaPlus,
  FaRegPlayCircle
} from '../icons';

const Table = ({ tabData, columns, setTabData, setColumns, searchTerm, reverse }) => {
  const [createNewCol, setCreateNewCol] = useState(false);
  const [colName, setColName] = useState('');
  const [colKey, setColKey] = useState('');
  const [colIcon, setColIcon] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const filteredTabData = tabData.filter((row) =>
    columns.some((col) =>
      String(row[col.key]).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const isColumnKeyUnique = (key) => {
    return !columns.some(col => col.key === key);
  };

  const onAddColumn = () => {
    if (colName && colKey) {
      if (!isColumnKeyUnique(colKey)) {
        setErrorMessage('A column with this key already exists.');
        return;
      }

      const newColumn = {
        key: colKey.toLowerCase().replace(/\s+/g, '_'),
        title: colName,
        icon: colIcon || '/default_column_icon.svg',
      };

      setColumns([...columns, newColumn]);

      const updatedTabData = tabData.map((row) => ({
        ...row,
        [newColumn.key]: '',
      }));

      setTabData(updatedTabData);

      setColName('');
      setColKey('');
      setColIcon('');
      setErrorMessage('');
      setCreateNewCol(false);
    }
  };

  const handleColumnModalToggle = () => {
    setCreateNewCol(!createNewCol);
    setErrorMessage('');
  };

  return (
    <>
      <table id="data-table" className="w-full table-auto border-collapse text-[14px]">
        <thead>
          <tr className="bg-gray-100 text-left font-medium text-gray-700">
            <th className="py-1 px-2 w-8" />
            <th className="py-1 px-2 w-8" />
            {columns.map((col, index) => (
              <th
                key={index}
                className={`${index === 0 && 'bg-[#FEF2C7]'
                  } py-1 px-4 min-w-[267px]`}
              >
                <div className="flex items-center gap-2">
                  <img src={col.icon} alt="" />
                  <span>{col.title}</span>
                </div>
              </th>
            ))}
            <th className="py-1 px-2">
              <div className="flex items-center gap-2 cursor-pointer" onClick={handleColumnModalToggle}>
                <FaPlus />
                <span>Add Column</span>
              </div>
            </th>
          </tr>
        </thead>
        {tabData.length > 0 ? <tbody className="text-gray-600">
          {(reverse ? filteredTabData.slice().reverse() : filteredTabData).map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border py-1 px-2 w-8 text-[12px]">{rowIndex + 1}</td>
              <td className="border py-1 px-2 w-8">
                <FaRegPlayCircle className="text-[#525CE9]" />
              </td>
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="border py-1 px-2 min-w-[267px] focus-within:bg-blue-100"
                  style={{ maxWidth: '267px' }}
                >
                  <input
                    type="text"
                    value={row[col.key] || ''}
                    onChange={(e) => {
                      const updatedData = [...tabData];
                      updatedData[rowIndex][col.key] = e.target.value;
                      setTabData(updatedData);
                    }}
                    className="w-full bg-transparent border-none whitespace-nowrap text-ellipsis overflow-hidden focus:outline-none"
                  />
                </td>
              ))}
              <td className="border px-4" />
            </tr>
          ))}
          <tr>
            {Array.from({ length: columns.length + 2 }).map((_, colIndex) => (
              <td key={colIndex} className="border px-4">
                {colIndex === 2 && (
                  <div
                    className="flex gap-2 items-center cursor-pointer hover:underline text-[12px] py-1 px-2 font-medium"
                    onClick={() => {
                      setTabData([
                        ...tabData,
                        columns.reduce((acc, col) => ({ ...acc, [col.key]: '' }), {}),
                      ]);
                    }}
                  >
                    <FaPlus />
                    <span>Add Row</span>
                  </div>
                )}
              </td>
            ))}

            <td className="border px-4" />
          </tr>
        </tbody>
          :
          (columns.length > 0 &&
            <div
              className="ml-4 mt-2 flex gap-2 items-center cursor-pointer text-[12px] py-2 px-4 font-medium bg-gray-800 text-white rounded-md shadow hover:bg-gray-900 transition-all duration-200"
              onClick={() => {
                setTabData([
                  ...tabData,
                  columns.reduce((acc, col) => ({ ...acc, [col.key]: '' }), {}),
                ]);
              }}
            >
              <FaPlus className="text-white" />
              <span className="text-nowrap">Add Row</span>
            </div>
          )
        }

      </table>

      {createNewCol && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white px-12 py-6 md:px-6 rounded-lg shadow-lg max-w-[400px] sm:w-[90%]">
            <h3 className="text-xl font-semibold mb-4">Add New Column</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Column Name</label>
              <input
                type="text"
                value={colName}
                onChange={(e) => setColName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Column Key</label>
              <input
                type="text"
                value={colKey}
                onChange={(e) => setColKey(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Column Icon (optional)</label>
              <input
                type="text"
                value={colIcon}
                onChange={(e) => setColIcon(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Icon URL"
              />
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
            )}

            <div className="flex justify-end gap-2">
              <button
                onClick={handleColumnModalToggle}
                className="text-gray-800 bg-gray-200 p-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 active:bg-gray-400 transition duration-200"
              >
                Cancel
              </button>

              <button
                onClick={onAddColumn}
                disabled={!colName || !colKey}
                className="text-white bg-green-500 p-2 rounded-md disabled:bg-gray-300 disabled:text-gray-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 active:bg-green-700 transition duration-200"
              >
                Add Column
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Table.propTypes = {
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
  reverse: PropTypes.bool.isRequired,
};

export default Table;
