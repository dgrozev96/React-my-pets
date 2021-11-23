import {Link, NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <header id="site-header">
            
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <a href="/">Dashboard</a>
                    
                    <div id="guest">
                        <Link to="/Login" className="button" >Login</Link>
                        <Link to="/Register" className="button">Register</Link>
                    </div>
                    
                    <div id="user">
                        <span>Welcome, email</span>
                        <Link to="/my-pets" className="button">My Pets</Link>
                        <Link to="/create" className="button">Add Pet</Link>
                        <Link to="#" className="button">Logout</Link>
                    </div>
                </section>
            </nav>
        </header>
    )
}

export default Header;