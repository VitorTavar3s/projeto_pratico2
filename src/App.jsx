import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Prontuario from './components/Prontuario/pronturario';
import CardPaciente from './components/CardPaciente/CardPaciente';
import Timeline from './components/Timeline/Timeline';

function App() {
  return (
    <div className="app-container">
      <div className='sidebars-container'>
      <Sidebar />
      <Prontuario/>
      </div>
      <main className="main-content">
        <h1 className="resumo-title">Resumo</h1>
        <CardPaciente/>
        <Timeline/>
      </main>
    </div>
  );
}

export default App;