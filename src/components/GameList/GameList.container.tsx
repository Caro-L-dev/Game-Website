import React, { ReactElement, useEffect, useState } from 'react';
import GameListRender from './GameList.render';
import axios from 'axios';
import { Game } from 'types';
import { API_HOST, API_KEY } from './constants';
import { Filter } from './types';

const GameList = (): ReactElement => {
    const [filter, setFilter] = useState<Filter>({ platform: 'browser', sortBy: 'relevance' })
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState<string>('')

    useEffect(() => {
        axios
        .get('/games', {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': API_HOST,
            },
            params: {
                platform: 'browser'
            }
        })
        .then(response => setGames(response.data))
        .catch(event => setError(event.message))
    }, [])

    const onFilterChange = useCallBack((event: ChangeEvent<HTMLFontElement>) => {
        setFilter(current => ({
            ...current,
            [event.target.name] : event.target.value
        }))
        event.preventDefault()
    }, [])

    return <GameListRender error={error} games={games} onFilterChange={onFilterChange} />
}

export default GameList;