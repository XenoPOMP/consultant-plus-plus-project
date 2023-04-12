import cn from 'classnames';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import Logo from '@ui/Logo/Logo';
import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';
import saulImg from '@media/images/soul_consultant.png';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={cn(styles.appHeader)}>
      <div className={cn(styles.navbar)}>
        <Logo />
      </div>

      <div className={cn(styles.bottomText)}>
        <div className={cn(styles.text)}>
          Дорогие друзья, вы когда-нибудь задумывались о том, что у вас есть
          права?
        </div>

        <div className={cn(styles.saulPlaceholder)}>
          <ProgressiveImage
            loaderColorScheme={{
              backgroundColor: 'transparent',
              loaderColor: 'black',
            }}
            src={saulImg}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
