import React, {ReactElement} from 'react';
import { Game } from 'types';
import GameCard from 'components/GameCard';
import { List, ListItem } from './styles';

interface Props {
    error?: string,
    games: Game[]
};

const GameList = ({ error, games }: Props): ReactElement => {
    if (error) {
        return <p>Unable to fetch games.</p>
    }
    if (!games?.length) {
        return <p>No games available.</p>
    }
    return (
        <List>
           {games.map(game => (
               <ListItem key={game.id}>
                   <GameCard content={game} />
               </ListItem>
           ))} 
        </List>
    )
};

export default GameList;