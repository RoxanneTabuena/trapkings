
import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import style from './checkout.module.css'

export const Checkout = () => {
    const [state, dispatch] = useContext(AppContext)
    return (
    <div className={style.checkout}>
        <p>{state.orderType}</p>
    </div>)
}
