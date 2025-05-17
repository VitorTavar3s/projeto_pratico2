import { useState } from 'react';
import '../../styles/components/ModalDoc.css';

const ModalDoc = ({ onClose }) => {
  const [data, setData] = useState(new Date().toLocaleDateString('pt-BR'));
  const [conteudo, setConteudo] = useState('');
  const [modeloAtestado, setModeloAtestado] = useState('');

  return (
    <div className="modal-doc-overlay">
      <div className="modal-doc-content">
        <div className="modal-doc-header">
          <h2>Documentação</h2>
          <button className="modal-doc-close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        
        <div className="modal-doc-divider"></div>
        
        <div className="doc-data-container">
          <div className="doc-data-group">
            <label>Data</label>
            <input 
              type="date" 
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="doc-data-input"
            />
          </div>
          
          <div className="doc-data-group">
            <label>Modelo de Atestado</label>
            <select
              value={modeloAtestado}
              onChange={(e) => setModeloAtestado(e.target.value)}
              className="doc-data-input"
            >
              <option value="">Selecione um modelo</option>
              <option value="modelo1">Atestado padrão com CID</option>
              <option value="modelo2">Atestado de Incapacidade Permanente</option>
              <option value="modelo3">Atestado de Alta Médica</option>
            </select>
          </div>
        </div>
        
        <textarea 
          className="doc-textarea"
          placeholder="Descrição"
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
        ></textarea>
        
        <div className="modal-doc-divider"></div>
        
        <div className="modal-doc-actions">
          <div className="doc-actions-left">
            <button className="doc-btn-outlined">
              <span className="doc-btn-icon">✉️</span> Enviar por Email
            </button>
            <button className="doc-btn-outlined" onClick={() => window.print()}>
              <span className="doc-btn-icon">🖨️</span> Imprimir
            </button>
          </div>
          
          <div className="doc-actions-right">
            <button className="doc-btn-secondary">
              Salvar e Adicionar Outro
            </button>
            <button className="doc-btn-salvar" onClick={() => window.print()}>
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDoc;