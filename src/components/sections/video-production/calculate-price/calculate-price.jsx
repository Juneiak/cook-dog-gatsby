import * as React from "react";
import * as styles from './calculate-price.module.css';
import motorDescImage from '../../../../images/misc/motor-desc.png';
import { MediaImage, BasicButton } from "../../../ui";

export default function CalculatePrice() {

  return (
    <section className={styles.calculatePrice}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}><span style={{color: 'var(--color-blue)'}}>Наши цены и сроки</span> вас приятно удивят</h2>
          <p className={styles.subtitle}>Из-за хорошей оптимизации процессов, мы можем предложить более привлекательную цену относительно рынка</p>
          <div className={styles.buttonContainer}><BasicButton text='Расчитать цену' onClick={() => false} color='blue' /></div>
        </div>
        <div className={styles.imageContainer}><MediaImage image={motorDescImage} image_webp={false} image_480={false} image_480_web={false} /></div>
      </div>
    </section>
  )
}
