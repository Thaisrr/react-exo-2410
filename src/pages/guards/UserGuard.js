import {isLogged} from "../../utils/services/AuthService";
import {Navigate} from "react-router-dom";

export const UserGuard = ({children}) => {
    if(isLogged()) return children;
    else {
        console.warn(`Vous devez être connecté⋅e pour accéder à cette page`);
        return <Navigate to={'/login'} replace/>
    }
}
