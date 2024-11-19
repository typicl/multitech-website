import logo from '../../assets/multitech-logo.svg';
import styles from './index.module.scss';

export function Navigation() {
  const links = [
    { label: 'Solutions (MPS)', url: '/solutions' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ];
  return (
    <nav className={styles.navigation}>
      <img className={styles.logo} src={logo} />
      <div>
        {links.map(l => (
          <a key={l.label} href={l.url}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
