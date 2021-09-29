import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";


const Navbar = () => {
    return (
        <NavbarStyled>
            <ul className="nav-items">
                <li className="title">
                    <CollectionsBookmarkIcon />
                    Reminders
                </li>   
                <li className="nav-item">
                    <NavLink to="/" exact>Notes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/ToDoList" exact>To-do List</NavLink>
                </li>
                </ul>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
    padding-bottom : 1rem;
    background-color: #852747;
    margin: auto -16px;
    padding: 10px 30px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    
    ul
    {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        list-style: none;
        background-color: #852747;
        height: 3.5rem;
    }

    .title
    {
        margin-right:auto;
        font-family: "McLaren", cursive;
        font-weight: 300;
        font-size:2rem;
    }

    a
    {
        text-decoration: none;
        transition: 0.75s all ease-in-out;
        background-color: #852747;
        color: black;
        font-family: "McLaren", cursive;
        font-weight: 200;

        &:hover
        {
            color: #FEF1E6;
        }
    }

    li
    {
        text-decoration: none;
        margin: 0 10px;
        font-size: 1.3rem;

    }
`
export default Navbar