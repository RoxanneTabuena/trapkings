import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import style from './root.module.css'
export const Root = () => {
    const [state, dispatch] = useContext(AppContext)
    const {cart} = state
    return (
    <div className={style.root}>
        <p>{cart[0]}</p>
    </div>)
}