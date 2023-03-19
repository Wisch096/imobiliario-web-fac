import styled from "styled-components";
import { useState } from "react";


    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
    `;

    const Titulo = styled.h1`
        display: flex;
        justify-content: center;
    `;

    const SearchBar = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    `;

    const SearchInput = styled.input`
    border: none;
    flex: 1;
    margin-left: 8px;
    font-size: 16px;
    &:focus {
    outline: none;
    }
    `;

    function Pesquisa() {

        const [searchTerm, setSearchTerm] = useState('');
    
        const handleChange = (event) => {
        setSearchTerm(event.target.value);
        };


        return (
        <Container>
            <Titulo>ALUGUE O COMPRE ESSE CACETE</Titulo>
            <SearchBar>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <SearchInput
                type="text"
                placeholder="Digite sua pesquisa"
                value={searchTerm}
                onChange={handleChange}
            />
            </SearchBar>
        </Container>
        );
    }
  
    export default Pesquisa;