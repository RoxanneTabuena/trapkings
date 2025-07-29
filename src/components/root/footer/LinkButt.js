import { NavLink } from 'react-router-dom'
import style from './footer.module.css'
export const LinkButt= ({title, path}) => {
    return (
    <NavLink to={path} className={style.linkButt}>
        <p>{title}</p>
    </NavLink>)
}