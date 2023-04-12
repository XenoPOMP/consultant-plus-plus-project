import { FC } from 'react';
import { LayoutProps } from './Layout.props';
import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';
import Header from '@ui/Header/Header';
import styles from './Layout.module.scss';
import cn from 'classnames';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <GlobalProvider>
      <main className={cn(styles.appMain)}>
        <div className={cn(styles.content)}>
          <Header />

          {children}
        </div>
      </main>
    </GlobalProvider>
  );
};

export default Layout;
