import React from 'react';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  return (
    <div className="flex text-[20px] p-4">
      <div className="border border-black flex-1 p-4 mr-4">
        <Login/>
      </div>
      <div className="border border-black flex-1 p-4">
        <Register title="Register"/>
      </div>
    </div>
  );
}

export default App;
