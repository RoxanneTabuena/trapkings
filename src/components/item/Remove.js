import style from './item.module.css'
import { useLocation } from 'react-router-dom'
export const Remove = () => {
    const { pathname }= useLocation()
    return (
    <div className={style.remove}>
        <p>{pathname}</p>
    </div>)
}
