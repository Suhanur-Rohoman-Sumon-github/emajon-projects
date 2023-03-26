import React from 'react';
import Card from './components/Cards/Card';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Card></Card>
    </div>
  );
};

export default App;