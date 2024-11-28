import React from 'react';

import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import UIContext from './providers/UIContext';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <>
    <UIContext>
    <MainPage></MainPage>
    </UIContext>
    </>
  );
}

export default App;
