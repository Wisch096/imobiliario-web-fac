import styled from "styled-components";
import teste1 from "../../img/logo3.jpg";
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 1rem;
  font-size: 17px;
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
    color: white;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginButton = styled.button`
  background-color: white;
  border: 2px;
  font-size: 16px;
  font-family: 'Verdana';
  color: black;
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
`;

function Navbar({ loggedIn}) {
  return (
    <NavContainer>
      <img src={teste1} alt="Imagem de exemplo" 
       style={{ width: '3%', height: 'auto' }}/>
      <NavLinks>
        <NavLink>
          <a href="/">Página inicial</a>
        </NavLink>
        <NavLink>
          <a href="#">Blog</a>
        </NavLink>
        <NavLink>
          <a href="#">Perguntas frequentes (FAQ)</a>
        </NavLink>
        <NavLink>
          <a href="#">Política de privacidade</a>
        </NavLink>
      </NavLinks>
      <Link to="/cadastro">
        <LoginButton>{loggedIn ? "Logout" : "Cadastro"}</LoginButton>
      </Link>
    </NavContainer>
  );
}

export default Navbar;
