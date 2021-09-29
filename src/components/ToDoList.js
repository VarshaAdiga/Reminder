import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import styled from 'styled-components';

const ToDoList = () => {
    const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

    return (

        <ContainerStyled>
        <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
      </div>
    </ContainerStyled>
    )
}

const ContainerStyled = styled.div`

  background-color: #C8C6C6;
  min-height: 70vh;
  margin: 5% 15%;
  padding: 3.5rem 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(198, 1%, 29%);
  font-family: "Architects Daughter", cursive;
  text-align: center;
  font-size: 130%;
  border-radius: 20px;

  .container
  {
      width: 80%;
      height: auto;
      min-height: 500px;
      max-width: 500px;
      min-width: 250px;
      background: #f1f5f8;
      background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
      background-size: 25px 25px;
      border-radius: 20px;
      box-shadow: 4px 3px 7px 2px #00000040;
      padding: 1rem;
      box-sizing: border-box;
  
      .heading 
  {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
    }

    .heading h1 {
  transform: rotate(2deg);
  padding: 0.2rem 1.2rem;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  background-color: #C8C6C6;
  font-size: 1.5rem;
    }
  
  }

  

`

export default ToDoList
