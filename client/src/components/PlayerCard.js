import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 2% auto;
    padding: 2%;
    box-shadow: 0 0 10px;
    background-color: whitesmoke;
`

const PlayerCard = props => {
    return (
        <CardDiv>
            <h3>Name: {props.name}</h3>
            <h3>Country: {props.country}</h3>
        </CardDiv>
    )
}

export default PlayerCard;