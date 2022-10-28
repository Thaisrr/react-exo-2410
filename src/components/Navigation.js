import {NavLink} from "react-router-dom";
import {isLogged, logout} from "../utils/services/AuthService";
import {useDispatch} from "react-redux";
import {create} from "../store/alert";

const Navigation = () => {

    const dispatch = useDispatch();

    const deconnexion = () => {
        logout();
        dispatch(create({txt: 'Déconnecté⋅e !'}))
    }

    const ConnectedLinks = () => (
        <>
            <li>
                <NavLink to={'/create'}>Nouveau</NavLink>
            </li>
            <li>
                <button onClick={() => deconnexion()}>Déconnexion</button>
            </li>
        </>
    );

    const NotLoggedLinks = () => (
        <li>
            <NavLink to={'/login'}>Connexion</NavLink>
        </li>
    )


    return (
        <nav id='Nav'>
            <ul>
                <li>
                    <NavLink to={'/'} end>Accueil</NavLink>
                </li>
                {isLogged()? <ConnectedLinks/> : <NotLoggedLinks/>}
            </ul>
        </nav>
    )
}

export default Navigation;