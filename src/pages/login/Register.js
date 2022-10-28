import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {register as user_register } from "../../utils/services/AuthService";

const Register = () => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const save = async (user) => {
        const res = await user_register(user)
        if (res) navigate('/');
        else setError('Erreur d\'authentification.')
    }

    return (
        <>
            <h2>Inscription</h2>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit(save)}>
                <p>
                    <label>Email
                        <input {...register('email')}/>
                    </label>
                </p>
                <p>
                    <label>Username
                        <input {...register('username')}/>
                    </label>
                </p>
                <p>
                    <label>Password
                        <input {...register('password')}/>
                    </label>
                </p>
                <p>
                    <button>M'inscrire</button>
                </p>
            </form>
        </>
    )
}
export default Register;