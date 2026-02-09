import { useState } from 'react';
import styles from './Toggle.module.css';

interface ToggleProps {
  leftLabel?: string;
  rightLabel?: string;
  defaultValue?: 'left' | 'right';
  onChange?: (value: 'left' | 'right') => void;
  size?: 'small' | 'medium' | 'large';
}

export default function Toggle({
  leftLabel = 'Light',
  rightLabel = 'Dark',
  defaultValue = 'left',
  onChange,
  size = 'medium'
}: ToggleProps) {
  const [selected, setSelected] = useState<'left' | 'right'>(defaultValue);

  const handleToggle = (value: 'left' | 'right') => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className={`${styles.container} ${styles[size]}`}>
      <div className={styles.wrapper}>
        <button
          onClick={() => handleToggle('left')}
          className={`${styles.button} ${selected === 'left' ? styles.active : styles.inactive}`}
        >
          {leftLabel}
        </button>
        <button
          onClick={() => handleToggle('right')}
          className={`${styles.button} ${selected === 'right' ? styles.active : styles.inactive}`}
        >
          {rightLabel}
        </button>

        <div className={`${styles.slider} ${selected === 'left' ? styles.sliderLeft : styles.sliderRight}`} />
      </div>
    </div>
  );
}
