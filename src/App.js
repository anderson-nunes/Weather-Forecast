import React from 'react';
import styled from 'styled-components';
import { Card } from './components/Card';
import { Search } from './components/Search';

const Container = styled.div`
  width: 500px;
  padding: 3rem;
  margin-top: 3rem !important;
  margin: auto;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`

function App() {
  return (
    <Container>
      <Search />
      <Card />
    </Container>
  );
}

export default App;