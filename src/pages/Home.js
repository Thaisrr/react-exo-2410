import {boardgames} from "../utils/Games";
import '../style/Card.css';

const Home = () => {
    const games = boardgames;

    function getCard(game) {
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
                    {games.map(game => getCard(game))}
                </div>
            </section>

        </main>
    );
}
export default Home;