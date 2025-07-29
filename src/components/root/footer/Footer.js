import { LinkButt } from './LinkButt'
import style from './footer.module.css'
export const Footer = () => {
    return (
    <footer className={style.footer}>
        <LinkButt title='Flash Sale' path='/menu/sale' />
        <LinkButt title='Premium Menu' path='/menu/premium' />
    </footer>)
}