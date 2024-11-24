import { Link } from 'react-router-dom';
import logo from '../../assets/multitech-logo.svg';
import styles from './index.module.scss';
import { ROUTES } from '../../constants/routes';

export function Navigation() {
  const links = [
    { label: 'Solutions (MPS)', url: ROUTES.SOLUTIONS },
    { label: 'About', url: ROUTES.ABOUT },
    { label: 'Contact', url: ROUTES.CONTACT },
  ];
  return (
    <nav className={styles.navigation}>
      <div>
        <Link className={styles.logo} to={ROUTES.HOME}>
          <img src={logo} />
        </Link>
        <div>
          {links.map(l => (
            <a key={l.label} href={l.url}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
