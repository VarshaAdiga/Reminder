import React from "react";
import styled from 'styled-components';


function ToDoItem(props) {
  return (
      <ToDoItemStyled>
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
    </ToDoItemStyled>
  );
}

const ToDoItemStyled = styled.div`
    li 
    {
        display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  position: relative;
  padding: 0.5rem;
}
`

export default ToDoItem;
