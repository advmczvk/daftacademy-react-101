import { Link } from 'react-router-dom';
import { paths } from '../App'
import styles from './Header.module.scss';

export const Header = () => {
    return <>
    <header>
        <div className={styles.logo}>Logo</div>
        <nav>
            <ul>
                <li>
                    <Link className='AppLink' to={`/${paths.home}`}><h6>Home</h6></Link>
                </li>
                <li>
                    <Link className='AppLink' to={`/${paths.about}`}><h6>About us</h6></Link>
                </li>
                <li>
                    <Link className='AppLink' to={`/${paths.contact}`}><h6>Contact</h6></Link>
                </li>
                <li>
                    <Link className='AppLink' to={`/${paths.login}`}><h6>Login</h6></Link>
                </li>
            </ul>
        </nav>
    </header>
    </>
        
}