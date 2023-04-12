import Page from '@components/Page/Page';
import styles from './MainPage.module.scss';
import cn from 'classnames';
import AnimatedSelect from '@components/AnimatedSelect/AnimatedSelect';
import SelectItem from '@ui/SelectItem/SelectItem';

const MainPage = () => {
  return (
    <Page meta={{ pageTitle: 'Main', pageDescription: '', keywords: '' }}>
      <AnimatedSelect title={'Конституции'}>
        <SelectItem isSelected={false} onClick={() => {}}>
          Российская Федерация
        </SelectItem>

        <SelectItem isSelected={false} onClick={() => {}}>
          Республика Беларусь
        </SelectItem>

        <SelectItem isSelected={false} onClick={() => {}}>
          Республика Казахстан
        </SelectItem>

        <SelectItem isSelected={false} onClick={() => {}}>
          Китайская Народная Республика
        </SelectItem>
      </AnimatedSelect>

      <AnimatedSelect title={'Кодексы РФ'}>
        <SelectItem isSelected={false} onClick={() => {}}>
          Уголовный кодекс
        </SelectItem>
      </AnimatedSelect>

      <AnimatedSelect title={'Ещё что-нибудь, хз'}>
        <SelectItem isSelected={false} onClick={() => {}}>
          Глеб
        </SelectItem>

        <SelectItem isSelected={false} onClick={() => {}}>
          Уйманов
        </SelectItem>

        <SelectItem isSelected={false} onClick={() => {}}>
          Сальто
        </SelectItem>

        <SelectItem isSelected={false} onClick={() => {}}>
          С
        </SelectItem>

        <SelectItem isSelected={false} onClick={() => {}}>
          Места
        </SelectItem>
      </AnimatedSelect>
    </Page>
  );
};

export default MainPage;
