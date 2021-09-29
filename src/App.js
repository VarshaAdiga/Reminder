import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Note from './components/Note'
import Navbar from './components/Navbar';
import ToDoList from './components/ToDoList';
import styled from 'styled-components';

function App() {
  return (
    <AppStyled className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Note />
        </Route>
        <Route path="/ToDolist" exact>
          <ToDoList />
        </Route>
      </Switch>
    </AppStyled>
  );
}

const AppStyled = styled.div`

`

export default App;
