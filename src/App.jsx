import { useState } from 'react';
import { TopPane, Sidebar, Header, Table } from './components';

function App() {
  const [autoSave, setAutoSave] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <TopPane autoSave={autoSave} setAutoSave={setAutoSave} />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1">
          <div className="bg-white rounded-md shadow-lg">
            <Header />
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
