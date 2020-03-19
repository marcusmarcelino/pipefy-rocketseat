import React from 'react';

import { Container } from './styles';
import { 
  MdNotificationsNone, 
  MdAccountCircle, 
  MdMoreVert,
  MdSettings,
  MdBuild,
  MdFilterList,
  MdNotificationsActive,
  MdPeople,
  MdAssessment,
  MdViewAgenda

} from 'react-icons/md';

export default function Header() {
  return (
    <Container>
      <h1>Pipefy</h1>
      <div className="content-menus">
        <div className="menu-top">
          <p>Desenvolviment de Software - Agilize <span> - Plano premium - Conheça todos os <a href="">nossos planos</a>.</span> </p>
          <ul>
            <li> <MdNotificationsNone size={17}/> </li>
            <li> <MdAccountCircle size={17}/> </li>
            <li> <MdMoreVert size={17}/> </li>
          </ul>
        </div>
        <div className="menu-bottom">
          <ul>
            <li> <MdViewAgenda size={17}/> <span>Visualizar em Kanban</span> </li>
            <li> <MdAssessment size={17}/> <span>Relatórios</span> </li>
          </ul>

          <ul>
            <li> <button>+ convidar time</button> </li>
            <li> <span> 4  </span> <MdNotificationsActive size={17}/> </li>
            <li> <MdPeople size={17}/> </li>
            <li> <MdFilterList size={17}/> </li>
            <li> <MdSettings size={17}/> </li>
            <li> <MdBuild size={17} /> </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}