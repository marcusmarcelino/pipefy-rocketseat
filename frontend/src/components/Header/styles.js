import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  padding: 0 30px;
  background: #7159f1;
  color: #fff;

  display: flex;
  align-items: center;

  .content-menus{
    width: 100%;
    margin-left: 30px;
  }

  .content-menus div{
    margin: 10px 0;
  }

  ul{
    display:flex;
  }

  ul li{
    margin: 0 5px;
  }

  .menu-top p span,
  .menu-top p a {
    color:#fbbe4f;
  }

  .menu-bottom ul li span{
    margin: 0 5px;
  }

  li{
    display:flex;
  }

  ul{
    align-items: center;
  }

  .menu-bottom ul:nth-child(2) li:nth-child(1) button{
    background:#7d68f3;
    border:none;
    color:#fff;
    padding: 6px 5px;
    border-radius: 2px;
  }

  .menu-bottom ul:nth-child(2) li:nth-child(2){
    display: flex;
    background:#7d68f3;
    border-radius: 2px;
    padding: 3px 5px;
  }

  .menu-bottom ul:nth-child(2) li:nth-child(2) span{
    margin-right: 10px;
    padding:2px 5px;
    background:#8772fbc2;
  }

  .menu-top,
  .menu-bottom{
    display:flex;
    justify-content:space-between;
  }
`;