import styled from 'styled-components';
import Carousel from "../components/carousel";
import Card from "../components/card_imob";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
`;

function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Carousel />
      </div>
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
            imageUrl="teste1.jpg" 
        />
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
            imageUrl="teste1.jpg" 
        />
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
            imageUrl="teste1.jpg" 
        />
      </ContainerCard>
      <Footer />
    </div>
  )
}

export default Home;
