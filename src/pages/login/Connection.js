import {NavLink} from "react-router-dom";

const Connection = () => {
    return (
        <>
            <h2>Connexion</h2>

            <p>
                Pas encore de compte ? <NavLink to={'inscription'}>Inscription</NavLink>
            </p>
        </>
    )
}

export default Connection;