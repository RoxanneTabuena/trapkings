import style from './item.module.css'
import { useLocation } from 'react-router-dom'
export const Add = () => {
    const { pathname }= useLocation()
    return (
    <div className={style.add}>
        <p>{pathname}</p>
    </div>)
}
