import { NavLink } from 'react-router-dom'
import style from './root.module.css'

export const Header = () => {
    return (
    <header className={style.header}>
        <NavLink to='/'>
            <h2>Trap Kings</h2>
            <h3>ECHO PARK</h3>
        </NavLink>
    </header>)
}