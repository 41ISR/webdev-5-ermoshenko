import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className='nav'>
            <Link to="/">Популярные фильмы</Link>
            <Link to="/search">Поиск</Link>
        </nav>
    )
}