
import foto from '../../assets/user.jpg'
import '../../styles/components/CardPaciente.css';

const CardPaciente = () => {
  const paciente = {
    nome: "Renato Henrique Alves",
    idade: "23 anos, 14 dias",
    primeiraConsulta: "29/10/2017",
    convenio: "Unimed",
    atendimentos: 2,
    faltas: 0,
    foto: foto
  };

  return (
    <div className="card-paciente">
        <div className="paciente-header">
        <div className="paciente-foto">
          <img src={paciente.foto} alt={`Foto de ${paciente.nome}`} />
        </div>
      </div>
      
      <div className="info-grid">
        <h3 className="paciente-nome">{paciente.nome}</h3>
        <div className="info-row">
          <div className="info-item">
            <span className="detalhe-label">Idade:</span>
            <span className="detalhe-valor">{paciente.idade}</span>
          </div>
          <div className="info-item">
            <span className="detalhe-label">Atendimentos:</span>
            <span className="detalhe-valor">{paciente.atendimentos}</span>
          </div>
        </div>
        
        <div className="info-row">
          <div className="info-item">
            <span className="detalhe-label">Primeira consulta:</span>
            <span className="detalhe-valor">{paciente.primeiraConsulta}</span>
          </div>
          <div className="info-item">
            <span className="detalhe-label">Faltas:</span>
            <span className="detalhe-valor">{paciente.faltas}</span>
          </div>
        </div>
        
        <div className="info-row">
          <div className="info-item">
            <span className="detalhe-label">Convênio:</span>
            <span className="detalhe-valor">{paciente.convenio}</span>
          </div>
          <div className="info-item"></div> {}
        </div>
      </div>
    </div>
  );
};

export default CardPaciente;