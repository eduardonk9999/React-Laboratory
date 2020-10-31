import React from  'react';

import Header from './Header/Header';


const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];
  


console.log(produtos)

function App() {
  return (
    <>
      <Header />
      <h1> Teste </h1>
    </>
  );
}


export default App;
