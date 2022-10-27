import axios from "axios";

const game_url = 'http://localhost:8080/boardgames'

export const getGames = async () => {
    try {
        const {data} = await axios.get(game_url);
        return data;
    } catch (e) {
        //console.error(e);
        console.log('Nope');
    }
}

export const saveGame = async (game) => {
    try {
        const {data} = await axios.post(game_url, game);
        return data;
    } catch (e) {
        console.log(e);
    }
}