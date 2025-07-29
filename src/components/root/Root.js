import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './footer/Footer'
import style from './root.module.css'

export const Root = () => {
    return (
    <div className={style.root}>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>)
}