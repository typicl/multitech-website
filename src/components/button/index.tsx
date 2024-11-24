import cx from 'classnames';
import { Link, LinkProps } from 'react-router-dom';
import styles from './index.module.scss';
import { ROUTES } from '../../constants/routes';

type Props = LinkProps & {
  to: (typeof ROUTES)[keyof typeof ROUTES];
  useOutline?: boolean;
  useOutlineDark?: boolean;
};

export function Button({
  children,
  useOutline,
  useOutlineDark,
  ...props
}: Props) {
  return (
    <Link
      className={cx(styles.button, {
        [styles.outline]: useOutline,
        [styles.outlineDark]: useOutlineDark,
      })}
      {...props}
    >
      {children}
    </Link>
  );
}
