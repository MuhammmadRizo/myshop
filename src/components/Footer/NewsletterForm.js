import React, { useState } from 'react';
import styled from 'styled-components';
import './footer.css'
import { FcGoogle } from "react-icons/fc" 
import { AiFillFacebook } from "react-icons/ai"

const Form = styled.form`
  display: flex;
  margin: 30px 0 0 200px;
  `;

const InputField = styled.div`
  position: relative;
  margin-bottom: 55px;
  width: 100%;

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: -5px;
    font-size: 12px;
    color: #999;
  }

  label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    transition: all 0.2s ease-out;
  }

  label.focused {
    top: -10px;
    font-size: 12px;
    color: #999;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  outline: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 55%;
  left: 230px;
  `;

function NewsletterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField>
        <Input
          type="text"
          placeholder=" "
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="name">Name</label>
      </InputField>
      <InputField>
        <Input
          type="email"
          placeholder=" "
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="email">Email</label>
      </InputField>
      <Button type="submit" className='form__buttons1'>Log in</Button>
      <Button type="submit" className='form__buttons'><FcGoogle style={{marginRight: "10px"}}/>Google</Button>
      <Button type="submit" className='form__buttons2'><AiFillFacebook style={{marginRight: "10px"}}/>Facebook</Button>
    </Form>
  );
}

export default NewsletterForm;