import React, { useState } from 'react';
import Switch from 'react-switch';
import styles from './ThemeSwitcher.module.scss';

function ThemeSwitcher () {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className={styles.themeSwitcher}>
      <Switch
        checked={checked}
        onChange={handleChange}
        onColor='#c5f6fa'
        // onHandleColor='#2693e6'
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
