import styles from './index.module.scss';

export function SubNavigation() {
  const links = [
    { label: 'Customer Login', url: 'http://google.com' },
    { label: 'New Customer Supply Orders', url: 'http://google.com' },
  ];
  return (
    <nav className={styles.subNavigation}>
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
