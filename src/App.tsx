
import React from 'react';
import ProfileV1 from './components/profile-v1';
import ProfileV2 from './components/profile-v2';
import ProfileV3 from './components/profile-v3';

import Debug from './context/debug';

import './App.css';

function App() {

  const [tabId, setTab] = React.useState<number>(1);

  const handleTab = (id: number) => {
    setTab(id);
  };

  const renderProfile = () => {
    switch(tabId){
      case 2:
        return <ProfileV2 />;

      case 3:
        return <ProfileV3 />;

      default:
        return <ProfileV1 />;
    }
  };

  return (
    <Debug.Provider value={{}}>
    <div>
      <header>Header</header>
      <hr />
      <main>
        <ul id="tabs">
          <li className={tabId === 1 ? 'active': ''} onClick={() => handleTab(1)}>V1</li>
          <li className={tabId === 2 ? 'active': ''} onClick={() => handleTab(2)}>V2</li>
          <li className={tabId === 3 ? 'active': ''} onClick={() => handleTab(3)}>V3</li>
        </ul>
        <div id="tabs-container">
          {renderProfile()}
        </div>
      </main>
      <hr />
      <footer>Footer</footer>
    </div>
    </Debug.Provider>
  );
}

export default App;
