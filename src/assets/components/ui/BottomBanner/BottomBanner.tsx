import cn from 'classnames';
import { FC } from 'react';
import styles from './BottomBanner.module.scss';
import { BottomBannerProps } from './BottomBanner.props';
import saulBanner from '@media/images/bottom_banner_4x.jpg';
import ProgressiveImage from '@ui/ProgressiveImage/ProgressiveImage';

const BottomBanner: FC<BottomBannerProps> = ({}) => {
  return (
    <div className={cn(styles.banner)}>
      <ProgressiveImage
        alt={'saul-banner'}
        loaderColorScheme={{
          backgroundColor: 'transparent',
          loaderColor: 'black',
        }}
        src={saulBanner}
      />
    </div>
  );
};

export default BottomBanner;
