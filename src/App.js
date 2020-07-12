import React from 'react';
import './App.css';
import Shadow from './components/Shadow';
import ShadowInner from './components/Shadow/Shadow-inner';
import Form from './components/MainForm'
import CommentList from './components/CommentList';

function App() {
  return (
    <div className="App">
      {/* First task
      <Shadow horizontalLength='0'
        verticalLength='10' blurRadius='15' spreadRadius='0' rgba='rgba(0,0,0,0.75)' children={<ShadowInner />} /> */}
      {/* Second task */}
      {/* <Form /> */}
      <CommentList />
    </div>
  );
}

export default App;
