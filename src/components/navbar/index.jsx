import styled from "styled-components";
import teste1 from "../../img/logo3.jpg";
import { Link } from 'react-router-dom';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 4px;
  font-size: 17px;
  font-family: 'Verdana';
`;

const Logo = styled.h3`
  margin-left: 16px;
  color: white;
`

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
  margin-right: 16px;
`;

function Navbar({ loggedIn}) {
  return (
    <NavContainer>
      <Logo>M&L</Logo>
      <NavLinks>
        <NavLink>
          <a href="/">Página inicial</a>
        </NavLink>
        <NavLink>
          <a href="/blog">Blog</a>
        </NavLink>
        <NavLink>
          <a href="/cadastro">Cadastro</a>
        </NavLink>
        <NavLink>
          <a href="politicadeprivacidade">Política de privacidade</a>
        </NavLink>
      </NavLinks>
      <Link to="/login">
        <LoginButton>{loggedIn ? "Logout" : "Login"}</LoginButton>
      </Link>
    </NavContainer>
  );
}

export default Navbar;
