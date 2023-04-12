import cn from 'classnames';
import { FC } from 'react';
import styles from '@components/AnimatedSelect/AnimatedSelect.module.scss';
import { SelectItemProps } from './SelectItem.props';

const SelectItem: FC<SelectItemProps> = ({ children, isSelected, onClick }) => {
  return (
    <div className={cn(styles.item)} onClick={onClick}>
      {children}
    </div>
  );
};

export default SelectItem;
