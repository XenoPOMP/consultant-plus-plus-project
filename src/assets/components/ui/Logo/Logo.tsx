import cn from 'classnames';
import { FC } from 'react';
import styles from './Logo.module.scss';
import { LogoProps } from './Logo.props';

const Logo: FC<LogoProps> = ({}) => {
  return <div className={cn(styles.logo)}>СолГудман</div>;
};

export default Logo;
