import React from 'react'; 
import './App.css';
import Header from './Header';
import Tindercards from './Tindercards';
import Swipebutton from './Swipebutton';

function App() {
  return (
    <div className="App">
      <Header/>
      <Tindercards/>
      <Swipebutton/>
    </div>
  );
}

export default App;
