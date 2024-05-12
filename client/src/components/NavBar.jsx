import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-left">
            <span className="navbar-brand">Books Store</span>
        </div>
        <div className="navbar-right">
            <Link to="/books" className="navbar-link">Books</Link>
            <Link to="/login" className="navbar-link">Login</Link>
        </div>
    </nav>
  )
}
export default NavBar