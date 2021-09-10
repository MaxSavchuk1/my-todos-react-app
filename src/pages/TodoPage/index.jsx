import React, { useContext } from 'react';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import styles from './TodoPage.module.scss';
import { ThemeContext } from '../../contexts';
import classNames from 'classnames';
import TodoContainer from '../../components/TodoContainer';

function TodoPage () {
  const [isLight] = useContext(ThemeContext);

  const backgroundStyle = classNames(styles.pageContainer, {
    [styles.lightTheme]: isLight,
    [styles.darkTheme]: !isLight,
  });

  return (
    <div className={backgroundStyle}>
      <ThemeSwitcher />
      <TodoContainer />
    </div>
  );
}

export default TodoPage;
