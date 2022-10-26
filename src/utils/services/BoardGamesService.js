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