import {boardgames} from "../utils/Games";
import Card from "../components/Card";

const Home = () => {
    const games = boardgames;

    function Card2(game) {
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
    }

    return (
        <main id='Home'>
        <h1>Accueil</h1>

            <section>
                <h2>Mes Jeux</h2>

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