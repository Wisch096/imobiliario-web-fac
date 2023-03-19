import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Card = styled.div`
  width: 350px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  margin: 10px;
`;

const CardHeader = styled.div`
  background-color: #333;
  padding: 16px;
  text-align: center;
`;

const TextHeader = styled.div`
  margin: 0;
  font-size: 18px;
  color: rgb(255, 255, 255);
`;

const CardBody = styled.div`
  padding: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-bottom: 1px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.input.attrs({ type: 'submit' })`
  padding: 12px 24px;
  margin-left: 13px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover {
    background-color: #ccc;
    color: #333;
  }
`;

const Cadastro = () => {
  return (
    <>
    <Navbar />
    <Card>
      <CardHeader>
        <TextHeader>Register</TextHeader>
      </CardHeader>
      <CardBody>
        <form action="#">
          <FormGroup>
            <Label htmlFor="username">Username:</Label>
            <Input required name="username" id="username" type="text" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input required name="email" id="email" type="email" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <Input required name="password" id="password" type="password" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirm-password">Confirm Password:</Label>
            <Input required name="confirm-password" id="confirm-password" type="password" />
          </FormGroup>
          <Button value="submit" />
        </form>
      </CardBody>
    </Card>
    <Footer />
    </>
  );
};

export default Cadastro;
