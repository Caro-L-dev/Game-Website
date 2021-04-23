import React, { ReactElement, useEffect, useState } from 'react';
import GameListRender from './GameList.render';
import axios from 'axios';
import { Game } from 'types';

const GameList = (): ReactElement => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState<string>('')

    useEffect
}