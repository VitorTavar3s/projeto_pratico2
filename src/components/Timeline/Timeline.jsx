import { useState } from 'react';
import '../../styles/components/Timeline.css';
import CardTimeline from '../CardTimeline/CardTimeline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [visibleItems, setVisibleItems] = useState(3);

  const allTimelineData = [
    {
      id: 1,
      date: "20 JAN",
      year: "2025",
      author: "Dra. Ana Clara Rocha",
      time: "00:00",
      title: "Título",
      description: "Descrição detalhada do procedimento realizado durante a consulta."
    },
    {
      id: 2,
      date: "01 ABR",
      year: "2025",
      author: "Dra. Ana Clara Rocha",
      time: "31:45",
      title: "Consulta",
      description: "Consulta de rotina para acompanhamento médico."
    },
    {
      id: 3,
      date: "05 JAN",
      year: "2018",
      author: "Dra. Ana Clara Rocha",
      time: "30:00",
      title: "Consulta",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: 4,
      date: "15 DEZ",
      year: "2017",
      author: "Dra. Ana Clara Rocha",
      time: "14:30",
      title: "Retorno",
      description: "Retorno para avaliação."
    },
    {
      id: 5,
      date: "10 NOV",
      year: "2017",
      author: "Dr. Carlos Silva",
      time: "10:15",
      title: "Consulta",
      description: "Primeira consulta com novo médico."
    }

  ];

   const sortedData = allTimelineData
    .map(item => ({
      ...item,
      dateObj: parseDate(item.date, item.year)
    }))
    .sort((a, b) => b.dateObj - a.dateObj);

    const timelineData = sortedData.slice(0, visibleItems);

  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const loadMore = () => {
    setVisibleItems(prev => prev + 5); 
  };

  return (
    <div className="timeline-container">
      {timelineData.map(item => (
        <CardTimeline
          key={item.id}
          date={item.date}
          year={item.year}
          author={item.author}
          time={item.time}
          title={item.title}
          description={expandedItems[item.id] ? item.description : null}
          isExpanded={expandedItems[item.id]}
          onClick={() => toggleItem(item.id)}
        >
         
          {expandedItems[item.id] && (
            <div className="additional-content">
              <p>Mais detalhes podem ser adicionados aqui...</p>
            </div>
          )}
        </CardTimeline>
      ))}
      
      <button className="ver-mais-btn" onClick={loadMore}>
        Ver mais 
        <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:"5px"}}/>
      </button>
    </div>
  );
};


const parseDate = (dateStr, yearStr) => {
  const months = {
    JAN: 0, FEV: 1, MAR: 2, ABR: 3, MAI: 4, JUN: 5,
    JUL: 6, AGO: 7, SET: 8, OUT: 9, NOV: 10, DEZ: 11
  };
  
  const [day, month] = dateStr.split(' ');
  const year = parseInt(yearStr || new Date().getFullYear());
  
  return new Date(year, months[month], parseInt(day));
};

export default Timeline;