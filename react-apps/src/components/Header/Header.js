import { Link, NavLink } from 'react-router-dom'
const Header = ({
    isAuthenticated,
    user
}) => {
    let guestNavigation = (
        <div id="guest">
            <Link to="/Login" className="button" >Login</Link>
            <Link to="/Register" className="button">Register</Link>
        </div>
    )
    let userNavigation = (
        <div id="user">
            <span>Welcome, {user}</span>
            <Link to="/my-pets" className="button">My Pets</Link>
            <Link to="/create" className="button">Add Pet</Link>
            <Link to="#" className="button">Logout</Link>
        </div>
    )
    return (
        <header id="site-header">

            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>

                    {isAuthenticated
                    ? userNavigation
                    :guestNavigation}


                </section>
            </nav>
        </header>
    )
}

export default Header;