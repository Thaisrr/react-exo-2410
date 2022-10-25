import {boardgames} from "../utils/Games";
import Card from "../components/Card";
import {FiltreBtn1, FiltreBtn2} from "../components/FiltreBtn";

const Home = () => {
    const games = boardgames;
    const genres = ['strategy', 'card', 'calm', 'beautiful', 'fantasy', 'humor', 'cooperative'];

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

            <section>
                <h2>Mes Jeux</h2>

                <div className="flex">
                    {genres.map(g => <FiltreBtn1 filtre={g} key={g}/>)}
                </div>
                <div className="flex">
                    {genres.map(g => <FiltreBtn2 key={g}>{g}</FiltreBtn2>)}
                </div>

                <div className='grid centered'>
                    {games.map(game => <Card game={game} key={game.id}/>)}
                    {/*
                    Cette syntaxe :
                          <Card2 game={g}/>
                    Est (quasi) la version React de :
                        {Card2(g)}
                    */}

                </div>
            </section>
        </main>
    );
}
export default Home;