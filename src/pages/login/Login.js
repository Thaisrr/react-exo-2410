import {NavLink, Outlet} from "react-router-dom";

const Login = () => {
    return (
        <main>
            <h1>Login</h1>

            <nav>
                <NavLink to={''}>Connexion</NavLink>
                <NavLink to={'inscription'}>Inscription</NavLink>
            </nav>

            <Outlet/>

            <footer>
                Utilisation des données personnelles :
                <small>Nous vendons toutes vos données au diable</small>
            </footer>
        </main>
    )
}
export default Login;