import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (
        <nav id='Nav'>
            <ul>
                <li>
                    <NavLink to={'/'} end>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to={'/login'}>Connexion</NavLink>
                </li>
                <li>
                    <NavLink to={'/create'}>Nouveau</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;