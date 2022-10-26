import {boardgames} from "../utils/Games";
import Card from "../components/Card";
import {FiltreBtn1, FiltreBtn2} from "../components/FiltreBtn";
import {useState} from "react";

const Home = () => {
    const [games, setGames] = useState(boardgames);
    const genres = ['strategy', 'card', 'calm', 'beautiful', 'fantasy', 'humor', 'cooperative'];

    const filter = function (filtre) {
        console.log(filtre);
        // TODO : terminer le filtre
    }

    const purge = () => {
        setGames([]);
    }


   /* function Card2(game) {
        return (
            <div className={(game.is_best)? 'card best' : 'card'} key={'jeu_' + game.id} >
                <div className="c-header">
                    <img className='img' src={game.image} alt=''/>
                </div>
                <div className="c-body">
                    <h3>{game.name}</h3>
                </div>
            </div>
        )
    }*/

    return (
        <main id='Home'>
        <h1>Accueil</h1>

            <section className=" centered">
                <h2>Mes Jeux</h2>

                {/* Version 1 : props nommée */}
                <div className="flex">
                    {genres.map(g => <FiltreBtn1 filtre={g} key={g} filterFunc={filter}/>)}
                </div>

                {/* Version 2 : props children */}
                <div className="flex" id="divId">
                    {genres.map(g => <FiltreBtn2 key={g}>{g}</FiltreBtn2>)}
                    <button className='danger' onClick={purge}>Purger</button>
                </div>

                {games.length ?
                    (
                        <div className='grid'>
                            {games.map(game => <Card game={game} key={game.id}/>)}
                        </div>
                    ) :
                    <p>Aucun jeu à afficher</p>
                }
            </section>


            {/*
                    Cette syntaxe :
                          <Card2 game={g}/>
                    Est (quasi) la version React de :
                        {Card2(g)}
                    */}
        </main>
    );
}
export default Home;