import React from 'react';

import { DndProvider } from 'react-dnd';

import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';

import './App.css';

import Header from './components/Header';
import Board from './components/Board';
import Aside from './components/Aside';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid">
        <div>
          <Aside />
        </div>
        <div>
          <Header />
          <Board />
        </div>
      </div>
      <GlobalStyle />
    </ DndProvider>
  );
}

export default App;
