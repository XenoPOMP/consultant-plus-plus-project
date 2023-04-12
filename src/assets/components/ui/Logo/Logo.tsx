import cn from 'classnames';
import { FC } from 'react';
import styles from './Logo.module.scss';
import { LogoProps } from './Logo.props';
import { Link } from 'react-router-dom';

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link to={'/'} className={cn(styles.logo)}>
      СолГудман
    </Link>
  );
};

export default Logo;
