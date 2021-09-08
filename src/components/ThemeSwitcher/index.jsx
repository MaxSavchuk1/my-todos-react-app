import React, { useState } from 'react';
import Switch from 'react-switch';
import styles from './ThemeSwitcher.module.scss';

function ThemeSwitcher () {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className={styles.themeSwitcher}>
      <Switch checked={checked} onChange={handleChange} />
    </div>
  );
}

export default ThemeSwitcher;
