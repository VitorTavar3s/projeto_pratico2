import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock, faPrint, faShareNodes} from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/CardTimeline.css';

const CardTimeline = ({ date, year, author, time, title, description, children,isExpanded, onClick }) => {


     const handlePrint = (e) => {
    e.stopPropagation();
    
    // Cria um conteúdo HTML simplificado para impressão
    const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = 'none';
  
  document.body.appendChild(iframe);

  iframe.onload = function() {
    const printDocument = iframe.contentWindow.document;

    // Criar o conteúdo HTML
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Imprimir: ${title}</title>
          <style>
            @media print {
              body { 
                font-family: Arial, sans-serif;
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
                padding: 20px;
              }
              @page { 
                size: auto;
                margin: 15mm 15mm 15mm 15mm;
              }
              h2 {
                color: #2c3e50;
                border-bottom: 1px solid #eee;
                padding-bottom: 10px;
              }
              .print-meta {
                margin-bottom: 15px;
              }
              .print-content {
                margin: 20px 0;
                line-height: 1.6;
              }
              .print-footer {
                margin-top: 30px;
                font-size: 12px;
                color: #777;
              }
            }
          </style>
        </head>
        <body>
          <h2>${title}</h2>
          <div class="print-meta">
            <p><strong>Data:</strong> ${date} ${year ? year : ''}</p>
            <p><strong>Profissional:</strong> ${author}</p>
            <p><strong>Hora:</strong> ${time}</p>
          </div>
          ${description ? `<div class="print-content">${description}</div>` : ''}
          <div class="print-footer">
            Documento gerado em ${new Date().toLocaleDateString()}
          </div>
        </body>
      </html>
    `;

    // Escrever o conteúdo no iframe de forma segura
    printDocument.open();
    printDocument.write(html);
    printDocument.close();

    setTimeout(() => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
      
      // Remover o iframe após impressão
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    }, 100);
  };

  // Iniciar o processo
  iframe.src = 'about:blank';
};



  return (
    <div className="timeline-card" onClick={onClick}>
      <div className="timeline-card-header">
        <div className="timeline-date">
          <h3>{date}</h3>
          {year && <span>{year}</span>}
        </div>
        <div className="timeline-meta">
          <p>Por: {author}</p>
          <FontAwesomeIcon 
            icon={faClock} 
            style={{fontSize:'15px', marginRight:"5px", color:"#3498db"}} 
          />
          <span>{time}</span>
        </div>
      </div>
      
      <div className="timeline-card-content">
        <div className="content-header">
          <h4>{title}</h4>
          
        </div>
         {isExpanded && (
          <>
            <div className="divider"></div>
            {description && <p>{description}</p>}
            {children}
            <div className="divider"></div>
            <div className="content-icons">
              <FontAwesomeIcon 
                icon={faShareNodes} 
                className="action-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  // Lógica de compartilhamento
                }}
              />
              <FontAwesomeIcon 
                icon={faPrint} 
                className="action-icon"
                onClick={handlePrint}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardTimeline;