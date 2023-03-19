import styled from "styled-components";


const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#191970;
  color: #fff;
  padding: 1rem;
  font-size: 25px;
  font-family: 'Poppins';
`;

const Logo = styled.h1`
  margin: 0;
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
      <Logo>Logo</Logo>
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

export default Navbar;