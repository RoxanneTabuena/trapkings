
import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import style from './summary.module.css'

export const Summary = () => {
    const [state, dispatch] = useContext(AppContext)
    return (
    <div className={style.summary}>
        <p>{state.cart[0]}</p>
    </div>)
}
