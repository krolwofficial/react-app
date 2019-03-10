import React from 'react';
import './sass/Main.sass';
import Navigation from './features/navigation'
import Router from './Router'

const App = () => {
  return (
    <div className="app">
      <Navigation/>
      <main className="main">
        <Router/>
      </main>
    </div>
  );
}
 
export default App;
