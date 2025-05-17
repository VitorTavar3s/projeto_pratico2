
import { FaUserInjured, FaCalendarAlt, FaFileMedical, FaPills, FaUserMd } from 'react-icons/fa';
import '../../styles/components/Sidebar.css';
import { FaHouse } from 'react-icons/fa6';


function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <nav className="sidebar-menu">
          <ul>
            <li className="active">
              <a href="#" title="Dashboard">
                <FaHouse className="sidebar-icon" />
              </a>
            </li>
            <li>
              <a href="#" title="Pacientes">
                <FaUserInjured className="sidebar-icon" />
              </a>
            </li>
            <li>
              <a href="#" title="Agenda">
                <FaCalendarAlt className="sidebar-icon" />
              </a>
            </li>
            <li>
              <a href="#" title="Prontuários">
                <FaFileMedical className="sidebar-icon" />
              </a>
            </li>
            <li>
              <a href="#" title="Medicamentos">
                <FaPills className="sidebar-icon" />
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">
              <FaUserMd className="sidebar-icon" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;