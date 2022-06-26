import * as React from "react";
import * as styles from './calculate-price.module.css';
import motorDescImage from '../../../../images/misc/motor-desc.png';
import { MediaImage } from "../../../ui";

export default function CalculatePrice() {

  return (
    <section className={styles.calculatePrice}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2 className={styles.title}><span style={{color: 'var(--color-blue)'}}>Наши цены и сроки</span> вас приятно удивят</h2>
          <p className={styles.subtitle}>Из-за хорошей оптимизации процессов, мы можем предложить более привлекательную цену относительно рынка</p>
          <button type='button' className={styles.button} onCick={() => false}>
            <div className={styles.buttonTextContainer1}>
              <span className={styles.buttonText1}>Расчитать цену</span>
            </div>
            <div className={styles.buttonTextContainer2}>
              <span className={styles.buttonText2}>Расчитать цену</span>
            </div>
          </button>
        </div>
        <div className={styles.imageContainer}><MediaImage image={motorDescImage} image_webp={false} image_480={false} image_480_web={false} /></div>
      </div>
    </section>
  )
}
