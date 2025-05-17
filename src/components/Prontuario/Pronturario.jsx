import { useState, useEffect } from 'react';
import '../../styles/components/Prontuario.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import ModalPrescricao from '../Modals/ModalPrescricao';
import ModalDoc from '../Modals/ModalDoc';

const Prontuario = () => {
  const [isConsultationActive, setIsConsultationActive] = useState(false);
  const [consultationTime, setConsultationTime] = useState(1800);
  const [showModalPresc,setShowModalPresc] = useState(false);
  const [showModalDoc,setShowModalDoc] = useState(false);


  useEffect(() => {
    let interval;
    if (isConsultationActive && consultationTime > 0) {
      interval = setInterval(() => {
        setConsultationTime(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isConsultationActive, consultationTime]);


  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleConsultation = () => {
    setIsConsultationActive(!isConsultationActive);
  };

  return (
    <div className="prontuario-container">
      <h1>Prontuário</h1>
      <div className="divider"></div>
      <div className="consultation-section">
        <p>Duração da consulta</p>
        <div className="time-display">{formatTime(consultationTime)}</div>
        <button 
          
          className={`consultation-button ${isConsultationActive ? 'active' : ''}`}
          onClick={toggleConsultation}
        >
          <FontAwesomeIcon icon={isConsultationActive ? faStop : faPlay} style={{fontSize:"15px", marginRight:"8px"}}/>
          {isConsultationActive ? 'Parar atendimento' : 'Iniciar atendimento'}
        </button>
      </div>

      <div className="divider"></div>

      <div className="actions-section">
        <button className="action-button prescription" onClick={() => setShowModalPresc(true)}>Prescrição</button>
        <button className="action-button document" onClick={() => setShowModalDoc(true)}>Atestado / Documentação</button>
      </div>

      {showModalPresc && (
        <ModalPrescricao 
          onClose={() => setShowModalPresc(false)} // Fecha o modal
        />
      )}
      {showModalDoc && (
        <ModalDoc onClose={() => setShowModalDoc(false)} />
      )}
    </div>
  );
};

export default Prontuario;