import cn from 'classnames';
import { FC } from 'react';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = ({}) => {
  return <footer className={cn(styles.appFooter)}>Тут короче футер</footer>;
};

export default Footer;
