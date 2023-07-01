
import React, {useContext} from 'react';
import ProfileV1 from './components/profile-v1';
import ProfileV2 from './components/profile-v2';
import ProfileV3 from './components/profile-v3';

import Debug from './context/debug';

import './App.css';
import {UseDebugOutput} from './types';


const Page = (props: any) => {
  const [tabId, setTab] = React.useState<number>(1);
  const debug = useContext<UseDebugOutput>(Debug.Context);

  const handleTab = (id: number) => {
    setTab(id);
  };

  const renderDebugControls = () => {
    if(tabId === 3){
      return (
        <>
          <button onClick={debug.handlePlay}>Play</button>
          <button onClick={debug.handleNext}>Next</button>
        </>
      );
    }
    else{
      return null;
    }
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
    <div>
      <header>{renderDebugControls()}</header>
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
  );
};


function App() {
  const debug = Debug.useDebug();

  return (
    <Debug.Context.Provider value={debug}>
      <Page />
    </Debug.Context.Provider>
  );
}

export default App;
