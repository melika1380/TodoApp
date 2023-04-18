import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import TodoApp from './component/TodoApp/TodoApp';

function App() {
  return (
    <div className='App'>
      <Header />
      <TodoApp />
      <Footer />
    </div>    
  );
}

export default App;
