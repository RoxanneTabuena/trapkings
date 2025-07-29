
import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import style from './cart.module.css'

export const Cart = () => {
    const [state, dispatch] = useContext(AppContext)
    return (
    <div className={style.cart}>
        <p>{state.cart[0]}</p>
    </div>)
}
