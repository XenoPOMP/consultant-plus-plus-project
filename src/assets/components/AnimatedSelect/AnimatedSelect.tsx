import cn from 'classnames';
import { FC } from 'react';
import styles from './AnimatedSelect.module.scss';
import { AnimatedSelectProps } from './AnimatedSelect.props';
import useBoolean from '@hooks/useBoolean';
import { motion } from 'framer-motion';

const AnimatedSelect: FC<AnimatedSelectProps> = ({ title, children }) => {
  const [expanded, toggleExpanded] = useBoolean(false);

  return (
    <motion.div
      initial={{
        paddingBottom: expanded ? '.714em' : '0',
      }}
      animate={{
        paddingBottom: expanded ? '.714em' : '0',
      }}
      transition={{
        duration: 0.3,
      }}
      className={cn(styles.select)}
    >
      <motion.div
        initial={{
          padding: expanded ? '.286em 0' : '.657em 0',
        }}
        animate={{
          padding: expanded ? '.286em 0' : '.657em 0',
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(styles.title)}
        onClick={toggleExpanded}
      >
        {title}
      </motion.div>

      <motion.div
        initial={{
          height: expanded ? '100%' : '0',
        }}
        animate={{
          height: expanded ? '100%' : '0',
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(styles.itemGroup)}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedSelect;
