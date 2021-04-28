import React, {ChangeEvent, ReactElement} from 'react';
import { Game } from 'types';
import GameCard from 'components/GameCard';
import GameFilter from 'components/GameFilter';
import { List, ListItem } from './styles';

interface Props {
    error?: string,
    games: Game[],
    onFilterChange: (event: ChangeEvent<HTMLFormElement>) => void;
};

const GameList = ({ error, games, onFilterChange }: Props): ReactElement => {
    if (error) {
        return <p>Unable to fetch games.</p>
    }
    if (!games?.length) {
        return <p>No games available.</p>
    }
    return (
        <>
        <GameFilter onChange={onFilterChange} />
        <List>
           {games.map(game => (
               <ListItem key={game.id}>
                   <GameCard content={game} />
               </ListItem>
           ))} 
        </List>
        </>
    )
};

export default GameList;