import style from './menu.module.css'
import { useLocation } from 'react-router-dom'
export const Menu = () => {
    const { pathname }= useLocation()
    return (
    <div className={style.menu}>
        <p>{pathname}</p>
    </div>)
}
