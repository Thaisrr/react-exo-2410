import Card from "../components/Card";
import {FiltreBtn1, FiltreBtn2} from "../components/FiltreBtn";
import {useEffect, useState} from "react";
import {getGames} from "../utils/services/BoardGamesService";

const Home = () => {
    const [games, setGames] = useState(undefined);
    const genres = ['strategy', 'card', 'calm', 'beautiful', 'fantasy', 'humor', 'cooperative'];
    const [is_loading, setLoading] = useState(true);

    useEffect(() => {
        //getGames().then(g => setGames(g));
        const load = async () => {
            setGames(await getGames());
            setLoading(false);
        }
        setTimeout(() => load(), 3000 )
    }, [])

    const filter = function (filtre) {
        console.log(filtre);
        // TODO : terminer le filtre
    }

    const purge = () => {
        setGames([]);
    }

    const Content = () => {
        if(is_loading) return <p>Chargement en cours</p>
        if(games?.length) return <GamesGrid/>
        return <p>Aucun jeu à afficher</p>
    }

    const GamesGrid = () => (
        <div className='grid'>
            {games.map(game => <Card game={game} key={game.id}/>)}
        </div>
    )


    return (
        <main id='Home'>
        <h1>Accueil</h1>

            <section className=" centered">
                <h2>Mes Jeux</h2>

                {/* Version 1 : props nommée */}
                <div className="flex">
                    {genres.map(g => <FiltreBtn1 filtre={g} key={g} filterFunc={filter}/>)}
                </div>

                <Content/>
            </section>
        </main>
    );
}
export default Home;