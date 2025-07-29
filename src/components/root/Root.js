import { Outlet } from 'react-router-dom'
import style from './root.module.css'

export const Root = () => {
    return (
    <div className={style.root}>
        <main>
            <Outlet />
        </main>
    </div>)
}