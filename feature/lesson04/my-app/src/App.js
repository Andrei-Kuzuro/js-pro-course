import './App.css';
import React from 'react';
import { AddPost } from './components/Post/Cards/AddPost';
import { OnlinerList } from './components/Onliner/OnlinerList';
import { FacebookList } from './components/Facebook/FacebookList';
import { Clock } from './components/Clock/Clock';

function App() {
  return (
    <div className="App">
      <div className={'AddPost'}><AddPost/></div>
      <div className={'Facebook'}><FacebookList/></div>
      <div className={'AddOnliner'}><OnlinerList/></div>
      <div className={'Clock'}><Clock/></div>
    </div>
  );
}


export default App;
