import React from 'react';

import { Container } from './styles';

import { 
  MdDashboard,
  MdViewAgenda,
  MdMenu,
  MdAdb

} from 'react-icons/md';

export default function Aside() {
  return (
    <Container>
      <ul>
        <li>
          <a href="">< MdMenu size={30} /></a>
        </li>
        <li>
          <a href="">< MdViewAgenda size={30} /></a>
        </li>
        <li>
          <a href="">< MdDashboard size={30} /></a>
        </li>
        <li>
          <a href="">< MdAdb size={30} /></a>
        </li>
      </ul>
    </Container>
  );
}