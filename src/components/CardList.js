import React from "react";
//import { robots } from './robots';
import { StrictMode } from 'react';
import Card from './Card';
// The cardlist creates a set of cards, with dynamic id name and email
const CardList = ({robots}) => 
{
    return(
        <StrictMode>
        {
        robots.map((user, i) => {
            return (
                <Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}/>
                    );
            })
        }
        </StrictMode>
    );
}

export default CardList;