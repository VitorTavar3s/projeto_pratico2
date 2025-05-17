import '../../styles/components/ModalPrescricao.css';
import { useState } from 'react';

const ModalPrescricao = ({ onClose }) => {
  const [data, setData] = useState(new Date().toLocaleDateString('pt-BR'));

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Prescrição</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        
        <div className="divider"></div>
        
        <div className="data-container">
          <label>Data</label>
          <input 
            type="date" 
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="data-input"
          />
        </div>
        
        <textarea 
          className="prescricao-textarea"
          placeholder="Digite a prescrição completa aqui..."
        ></textarea>
        
        <div className="divider"></div>
        
        <div className="modal-actions">
          <button className="btn-imprimir">
            Imprimir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPrescricao;