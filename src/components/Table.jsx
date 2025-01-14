import { FaPlus, FaRegPlayCircle } from "react-icons/fa";
import { useState } from "react";
import { tableData, colData } from "../const/data";


const Table = () => {
  const [tabData, setTabData] = useState(tableData);
  const [columns, setColumns] = useState(colData);

  const [createNewCol, setCreateNewCol] = useState(false);
  const [colName, setColName] = useState('');
  const [colKey, setColKey] = useState('');
  const [colIcon, setColIcon] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      <table className="w-full border-collapse text-[14px]">
        <thead>
          <tr className="bg-gray-100 text-left font-medium text-gray-700">
            <th className="py-1 px-2 w-8" />
            <th className="py-1 px-2 w-8" />
            {columns.map((col, index) => (
              <th key={index} className={`${index === 0 && 'bg-[#FEF2C7]'} py-1 px-4`}>
                <div className="flex items-center gap-2">
                  <img src={col.icon} alt={col.title} />
                  <span>{col.title}</span>
                </div>
              </th>
            ))}
            <th className="py-1 px-2">
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={handleColumnModalToggle}
                >
                  <FaPlus />
                  <span>Add Column</span>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {tabData.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border py-1 px-2 w-8 text-[12px]">{rowIndex + 1}</td>
              <td className="border py-1 px-2 w-8">
                <FaRegPlayCircle className="text-[#525CE9]" />
              </td>
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="border py-1 px-2" style={{ maxWidth: '267px' }}>
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
            {columns.map((col, colIndex) => (
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
      </table>


      {createNewCol && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
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
                className="text-gray-600 bg-gray-300 p-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={onAddColumn}
                disabled={!colName || !colKey}
                className="text-white bg-green-500 p-2 rounded-md disabled:bg-gray-300"
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

export default Table;
