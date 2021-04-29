
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Game } from 'types';
import { API_HOST, API_KEY } from './constants';
import { Filter } from 'components/GameList/types';

type Response = {
	games: Game[],
	error: string
};

const useFetch = (params: Filter): Response => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState<string>('');
	const { platform, genre, tag, sortBy } = params;

	useEffect(() => {
		axios
			.get('/games', {
				baseURL: `https://${API_HOST}/api`,
				headers: {
					'x-rapidapi-key': API_KEY,
					'x-rapidapi-host': API_HOST,
				},
				params: {
					platform,
					category: genre,
					tag,
					'sort-by': sortBy,
				},
			})
			.then(response => setGames(response.data))
			.catch(event => setError(event.message))
	}, [platform, genre, tag, sortBy])

	return {
		games,
		error: error
	};
}

export default useFetch;