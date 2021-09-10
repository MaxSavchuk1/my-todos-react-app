import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../contexts';
import styles from './ThemeSwitcher.module.scss';

function ThemeSwitcher () {
  const [isLight, setIsLight] = useContext(ThemeContext);

  const handleChange = () => {
    setIsLight(!isLight);
  };
  return (
    <div className={styles.themeSwitcher}>
      <span>Theme switch</span>
      <Switch
        checked={isLight}
        onChange={handleChange}
        onColor='#c5f6fa'
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
        height={30}
        width={58}
      />
    </div>
  );
}

export default ThemeSwitcher;
