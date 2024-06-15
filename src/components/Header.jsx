import { Link, NavLink } from "react-router-dom/cjs/react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, Button } from 'reactstrap'
function Header({ basket }) {
    const basketLength = basket.length
    return (
        <div className="header">
            <div className="logo">
                <Link to='/'>
                    <img src="https://cdn.freelogodesign.org/files/a69f879b4e5e489799f78098cc8caaf2/thumb/logo_200x200.png?v=0" alt="logo" />
                </Link>
            </div>
            <div className="nav-bar">
                <NavLink to='/' className='nav-item'>Ana Sayfa</NavLink>
                <NavLink to='/products' className='nav-item'> Urunler</NavLink>
                <NavLink to='/basket' className='nav-item'> Sepet({basketLength})</NavLink>
            </div>
            <div className="search-area">
                <div>
                    <Input className="search-input" />
                </div>
                <div>
                    <Button
                        color="primary"
                    >
                        Ara
                    </Button>
                </div>
            </div>
        </div>




    )
}

export default Header;