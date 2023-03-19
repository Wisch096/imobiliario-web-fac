import styled from 'styled-components';
import Carousel from "../components/carousel";
import Card from "../components/card_imob";
import Navbar from '../components/navbar';
import Searchbar from '../components/searchbar';
import Footer from '../components/footer';

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  `;


function Home() {
  return (
    <Container>
        <Navbar />
        <Carousel />
        <Searchbar />
      <ContainerCard>
        <Card 
            propertyType="Casa" 
            address="Rua A, 123" 
            numBedrooms={3} 
            numBathrooms={2} 
            area={100} 
            price={1500} 
            imageUrl="teste1.jpg" 
        />
        <Card 
            propertyType="Casa" 
            address="Rua A, 123" 
            numBedrooms={3} 
            numBathrooms={2} 
            area={100} 
            price={1500} 
            imageUrl="teste2.jpg" 
        />
        <Card 
            propertyType="Casa" 
            address="Rua A, 123" 
            numBedrooms={3} 
            numBathrooms={2} 
            area={100} 
            price={1500} 
            imageUrl="teste3.jpg" 
        />
        <Card 
            propertyType="Casa" 
            address="Rua A, 123" 
            numBedrooms={3} 
            numBathrooms={2} 
            area={100} 
            price={1500} 
            imageUrl="teste3.jpg" 
        />
        
      </ContainerCard>
      <Footer />
    </Container>


  )
}

export default Home;
