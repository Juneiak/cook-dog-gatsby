import * as React from "react";
import * as styles from './basic-button.module.css';

export default function BasicButton({ text, onClick, color }) {

  return (
    <button type='button' className={`${styles.button} ${color === 'pink' ? styles.pink : styles.blue}`} onCick={onClick}>
      <div className={styles.buttonTextContainer1}>
        <span className={styles.buttonText1}>{text}</span>
      </div>
      <div className={styles.buttonTextContainer2}>
        <span className={styles.buttonText2}>{text}</span>
      </div>
  </button>
  )
}