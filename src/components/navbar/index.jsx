import styled from "styled-components";
import teste1 from "../../img/logo.png";

const NavContainer = styled.nav`
    display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#191970;
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
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
`;



function Navbar() {
  return (
    <NavContainer>
      <img src={teste1} alt="Imagem de exemplo" 
       style={{ width: '5%', height: 'auto' }}/>
      <NavLinks>
        <NavLink>
          <a href="#">Fale conosco</a>
        </NavLink>
        <NavLink>
          <a href="#">Cadastro</a>
        </NavLink>
      </NavLinks>
    </NavContainer>
  );
}

export default Navbar