import { SimpleReactComponent } from '@interfaces/SimpleReactComponent';

export interface SelectItemProps
  extends Pick<SimpleReactComponent, 'children'> {
  isSelected: boolean;
  onClick: () => void;
}
