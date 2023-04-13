import cn from 'classnames';
import { FC } from 'react';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import Logo from '@ui/Logo/Logo';
import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';
import saulImg from '@media/images/consultant_4x.jpg';
import MediaWidthView from '@ui/mediaQueries/MediaWidthView/MediaWidthView';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={cn(styles.appHeader)}>
      <MediaWidthView maxWidth={1408}>
        <div className={cn(styles.saulPlaceholder)}>
          <ProgressiveImage
            loaderColorScheme={{
              backgroundColor: 'transparent',
              loaderColor: 'black',
            }}
            src={saulImg}
          />
        </div>
      </MediaWidthView>

      <div className={cn(styles.navbar)}>
        <Logo />

        <div className={cn(styles.input)}>
          <input type={'text'} placeholder={'Поиск...'} />

          <svg
            width='35'
            height='38'
            viewBox='0 0 35 38'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='22.5'
              cy='12.5'
              r='11'
              fill='#FDFDFD'
              stroke='black'
              strokeWidth='3'
            />
            <line
              x1='1.90569'
              y1='36.9741'
              x2='16.9057'
              y2='20.9741'
              stroke='black'
              strokeWidth='3'
            />
          </svg>
        </div>
      </div>

      <div className={cn(styles.bottomText)}>
        <div className={cn(styles.text)}>
          Дорогие друзья, вы когда-нибудь задумывались о том, что у вас есть
          права?
        </div>

        <MediaWidthView minWidth={1409}>
          <div className={cn(styles.saulPlaceholder)}>
            <ProgressiveImage
              loaderColorScheme={{
                backgroundColor: 'transparent',
                loaderColor: 'black',
              }}
              src={saulImg}
            />
          </div>
        </MediaWidthView>
      </div>
    </header>
  );
};

export default Header;
