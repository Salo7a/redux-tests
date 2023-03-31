import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/feautres/auth/authSlice";

const Header = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }
    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isAuthenticated &&
                <nav>
                    <ul>
                        <li>
                            <a href='/'>My Products</a>
                        </li>
                        <li>
                            <a href='/'>My Sales</a>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </nav>}

        </header>
    );
};

export default Header;
