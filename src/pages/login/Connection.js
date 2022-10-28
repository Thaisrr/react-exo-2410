import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {connect} from "../../utils/services/AuthService";

const Connection = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const {register, handleSubmit} = useForm();

    const login = async (credentials) => {
        const res = await connect(credentials);
        console.log(res)
        if(res) navigate('/');
        else setError('Mauvais identifiants !');
    }

    return (
        <>
            <h2>Connexion</h2>

                {error && <p>{error}</p>}

                <form onSubmit={handleSubmit(login)}>
                    <p>
                        <label>Email
                            <input {...register('email')}/>
                        </label>
                    </p>
                    <p>
                        <label>Password
                            <input type='password' {...register('password')}/>
                        </label>
                    </p>
                    <p>
                        <button>Me Connecter</button>
                    </p>
            </form>



            <p>
                Pas encore de compte ? <NavLink to={'inscription'}>Inscription</NavLink>
            </p>
        </>
    )
}

export default Connection;