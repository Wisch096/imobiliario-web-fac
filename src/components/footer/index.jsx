import React from 'react';
import styled from 'styled-components';

import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #B0C4DE;
  color: #fff;
  padding: 1rem;
  font-size: 25px;
  font-family: 'Verdana';
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
    margin-left: 1rem;
    
    
& > a {
  color: #000000;
  text-decoration: none;
&:hover {
    text-decoration: underline;
  }
}
& > p {
    font-size: small;
}
`;

function Footer() {
    return (
        <NavContainer>
            <NavLinks>
        <NavLink>
          <a href="#">Quem somos</a>
          <p>Imobiliaria M & L "A garantia de um futuro melhor"</p>
        </NavLink>
        <NavLink>
          <a href="#">Contato</a>
          <p>(77)998726000</p>
        </NavLink>
      </NavLinks>
        </NavContainer>
    );
}

export default Footer;
