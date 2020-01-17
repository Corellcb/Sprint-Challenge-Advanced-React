import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

import PlayerCard from './PlayerCard';

const PlayerList = props => {
    const[darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
        <div>
            <h2>Player Info</h2>
            <button onClick={toggleMode} >Dark</button>
            {props.players.map((el, index) => (
                <PlayerCard key={index} name={el.name} country={el.country} />
            ))}
        </div>
    )
}

export default PlayerList;