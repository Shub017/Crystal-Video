
import { Link } from 'react-router-dom';
import logo from '../../../Images/Logo/Crystal_Video_Logo.jpeg';
import styles from './Navbar.module.css';
import 'animate.css';

export default function Navbar() {
    return (
        <>
            <ol className={`${styles.navbar} animate__animated animate__bounceInLeft`}>
                <li>
                    <img src={logo} className={styles.logoSize} alt="Crystal Video Logo" />
                    <p>Crystal Video</p>
                </li>
                <li><Link to='/home' className={styles.home}>Home</Link></li>
                <li><Link to='/about' className={styles.home}>About</Link></li>
                <li><Link to='/contact' className={styles.home}>Contact</Link></li>
            </ol>

            
  
            {/* <h1 className="text-3xl font-bold underline text-center">
                Hello world!
            </h1> */}
        </>
    );
}
