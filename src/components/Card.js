import '../style/Card.css';

const Card = ({game}) => (
    <div className={(game.is_best)? 'card best' : 'card'} key={'jeu_' + game.id} >
        <div className="c-header">
            <img className='img' src={game.image} alt=''/>
        </div>
        <div className="c-body">
            <h3>{game.name}</h3>
                <ul className='grid col2'>
                    <li>
                        <i className="bi bi-people"></i>
                        Entre {game.minPlayers} et {game.maxPlayers} joueurs⋅ses
                    </li>
                    <li>
                        <i className='bi bi-clock'></i>
                        ± {game.duration}min
                    </li>
                    <li>
                        Entre {game.minAge} et 99 ans
                    </li>
                </ul>
            <a href='#'>Voir les détails</a>
        </div>
    </div>
);
export default Card;