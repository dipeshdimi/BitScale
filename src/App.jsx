import { useState } from 'react';
import { TopPane, Sidebar, Header, Table } from './components';
import { tableData, colData } from "./const/data";

function App() {
  const [tabData, setTabData] = useState(tableData);
  const [columns, setColumns] = useState(colData);
  const [searchTerm, setSearchTerm] = useState('');
  const [reverse, setReverse] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <TopPane />

      <div className='flex flex-1'>
        <Sidebar />
        <div className="overflow-hidden bg-white rounded-md shadow-lg flex flex-1 flex-col">
          {/* Data flow not complex enough to need useContext/Redux */}
          <Header
            tabData={tabData}
            columns={columns}
            setTabData={setTabData}
            setColumns={setColumns}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            reverse={reverse}
            setReverse={setReverse}
          />
          <div className='overflow-auto flex-1'>
            {/* Data flow not complex enough to need useContext/Redux */}
            <Table
              tabData={tabData}
              columns={columns}
              setTabData={setTabData}
              setColumns={setColumns}
              searchTerm={searchTerm}
              reverse={reverse}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
