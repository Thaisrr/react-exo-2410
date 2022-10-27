import {useForm} from "react-hook-form";
import {saveGame} from "../utils/services/BoardGamesService";
import {useNavigate} from "react-router-dom";

const GameForm = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const save = async (new_game) => {
        console.log(new_game);
        const res = await saveGame(new_game);
        if(res) {
            reset();
            navigate('/');
        } else {
            alert('Oups, une erreur est survenue, les données n\'ont pas pu être sauvegardées');
        }

    }


    return (
        <main>
            <h1>Créer un jeu</h1>

            <form onSubmit={handleSubmit(save)}>
                <div>
                    <label htmlFor={'name'}>Nom</label>
                    <input id={'name'} {...register('name', {required: 'Veuillez entrer un nom à votre jeu'})}/>
                    {errors?.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor={'image'}>Image</label>
                    <input id={'image'} {...register('image', {
                        required: 'Veuillez mettre le lien de votre image',
                        minLength: {value: 5, message:'Le format du lien ne semble pas valide'}
                    })}/>
                    {errors?.image && <p>{errors.image.message}</p>}
                </div>
                <div>
                    <label htmlFor={'minPlayers'}>Joueurs minimum</label>
                    <input id={'minPlayers'} type={'number'} value={2} {...register('minPlayers', {min: 1, max: 99})}/>
                </div>
                <div>
                    <label htmlFor={'maxPlayers'}>Joueur⋅se⋅s Maximum</label>
                    <input id={'maxPlayers'} type={'number'} value={5} {...register('maxPlayers')}/>
                </div>
                <div>
                    <label htmlFor={'age'}>Age Minimum</label>
                    <input id={'age'} type={'number'} value={7} {...register('age')}/>
                </div>
                <div>
                    <label htmlFor={'duration'}>Durée</label>
                    <input id={'duration'} type={'number'} {...register('duration')} value={30}/>
                </div>
                <div>
                    <input id={'best'} type='checkbox' {...register('best')}/>
                    <label htmlFor={'best'}>Best Seller ?</label>
                </div>
                <p>
                    <button>Créer le jeu</button>
                </p>
            </form>
        </main>
    )
}
export default GameForm;