import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 22%;
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 50px;
  transition: transform 0.3s ease-out;
  &:hover {
    transform: translateY(-20px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  padding: 16px;
`;

const PropertyType = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 8px;
`;

const Address = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Detail = styled.p`
  font-size: 14px;
  color: #444;
  display: flex;
  align-items: center;
`;

const Icon = styled.i`
  font-size: 20px;
  margin-right: 8px;
`;

const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
`;

const Card = ({ propertyType, address, numBedrooms, numBathrooms, area, price, imageUrl }) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt="Imagem do imóvel" />
      <InfoContainer>
        <PropertyType>{propertyType}</PropertyType>
        <Address>{address}</Address>
        <DetailsContainer>
          <Detail><Icon className="fas fa-bed" />{numBedrooms} quartos</Detail>
          <Detail><Icon className="fas fa-bath" />{numBathrooms} banheiros</Detail>
          <Detail><Icon className="fas fa-ruler-combined" />{area} m²</Detail>
        </DetailsContainer>
        <Price>{price}</Price>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;
