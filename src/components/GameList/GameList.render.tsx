import React, {ReactElement} from 'react';
import { Game } from 'types';
import GameCard from 'components/GameCard';

interface Props {
    error?: string,
    games: Game[]
};

const GameList = ({ error, games }: Props): ReactElement => {
    if (error) {
        return <p>Unable to fetch games.</p>
    }
    if (games?.length) {
        return <p>No games available.</p>
    }
    return (
        <ul>
           {games.map(game => (
               <li key={game.id}>
                   <GameCard content={game} />
               </li>
           ))} 
        </ul>
    )
};

export default GameList;