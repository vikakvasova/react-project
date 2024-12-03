import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import UIContext from './providers/UIContext';
import MainPage from './pages/MainPage/MainPage';
import { Provider } from 'react-redux';
import store from './store/store';
import SelectedPage from './pages/SelectedPage/SelectedPage';
import { books } from './data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function App() {
  return (
    <>
    <React.StrictMode>
      <Provider store={store}>
        <UIContext>
          <MainPage></MainPage>
          <SelectedPage></SelectedPage>
        </UIContext>
      </Provider>
    </React.StrictMode>
    
    </>
  );
}

export default App;
