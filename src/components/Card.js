import '../style/Card.css';
const Card = ({game}) => (
    <div className={(game.is_best)? 'card best' : 'card'} key={'jeu_' + game.id} >
        <div className="c-header">
            <img className='img' src={game.image} alt=''/>
        </div>
        <div className="c-body">
            <h3>{game.name}</h3>
        </div>
    </div>
);
export default Card;