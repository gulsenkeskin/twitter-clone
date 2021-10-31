import React from 'react'
import Container from './layout/Container';
import Content from './layout/Content';
import Sidebar from './layout/Sidebar';
import Widgets from './layout/Widgets';

const App = () => {
  return (
    <Container >
      <Sidebar></Sidebar>
      <Content></Content>
      <Widgets></Widgets>

    </Container>
  )
}

export default App;