import {NavLink} from "react-router-dom";
import {isLogged, logout} from "../utils/services/AuthService";

const Navigation = () => {

    const ConnectedLinks = () => (
        <>
            <li>
                <NavLink to={'/create'}>Nouveau</NavLink>
            </li>
            <li>
                <button onClick={() => logout()}>Déconnexion</button>
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