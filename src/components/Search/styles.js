import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;
  width: min(100%, 25rem);
  padding: 0 3rem;
  height: 4.5rem;
  border-radius: 5px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
  transition: 0.4s;
  margin-top: 4rem;
`;

export const Text = styled.h1`
margin: auto;
margin: 1rem 0;
text-align: center;
font-size: 2rem;
color: rgb(41, 41, 41);
`

export const Input = styled.input`
  width: 100%;
  font-size: 1.7rem;
  border: none;
  outline: none;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #fff;

  > svg {
    height: 2rem;
    width: 2rem;
  }

  * {
    cursor: pointer;
  }
`;