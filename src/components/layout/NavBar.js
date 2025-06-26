import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './NavBar.module.css';
import logo from '../../img/logo.png';
function NavBar() {
    return (
    <nav className={styles.navbar}>
    <Container>
    <ul className={styles.list}>
    <li className={styles.item}><Link to="/"><img src={logo}/></Link> </li>
    <li className={styles.item}><Link to="/">Home</Link> </li>
    <li className={styles.item}><Link to="/projects">Projetos</Link></li>
    <li className={styles.item}><Link to="/company">Empresa</Link></li>
    <li className={styles.item}><Link to="/contatos">Contato</Link></li>
    </ul>
    </Container>
    </nav>
    )
}
export default NavBar;