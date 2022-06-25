import * as React from "react";
import * as styles from './statistic.module.css';
import { numbersData } from "../../../../misc/data";
import StatisticNumbers from "./statistic-numbers/statistic-numbers";

export default function Statistic() {
  const [block, setBlock] = React.useState('add');


  return (
    <section className={styles.statistic}>
      <div className={styles.video}></div>

      <div className={styles.content}>

        <ul className={styles.blockMenu}>
          <li onMouseOver={() => setBlock('add')} className={`${styles.menuElement} ${block==='add' ? styles.isActive : ''}`}>Реклама</li>
          <li onMouseOver={() => setBlock('socials')} className={`${styles.menuElement} ${block==='socials' ? styles.isActive : ''}`}>Социальные сети</li>
          <li onMouseOver={() => setBlock('study')} className={`${styles.menuElement} ${block==='study' ? styles.isActive : ''}`}>Обучающие </li>
          <li onMouseOver={() => setBlock('marketplaces')} className={`${styles.menuElement} ${block==='marketplaces' ? styles.isActive : ''}`}>Маркетплейсы</li>
        </ul>

        <div className={styles.numbers}>
          <ul className={styles.numbersList}>
            <li className={`${styles.numbersListElement} ${block==='add' ? styles.isShown : ''}`}>
              <StatisticNumbers data={numbersData.add}/>
            </li>
            <li className={`${styles.numbersListElement} ${block==='socials' ? styles.isShown : ''}`}>
              <StatisticNumbers data={numbersData.socials}/>
            </li>
            <li className={`${styles.numbersListElement} ${block==='study' ? styles.isShown : ''}`}>
              <StatisticNumbers data={numbersData.study}/>
            </li>
            <li className={`${styles.numbersListElement} ${block==='marketplaces' ? styles.isShown : ''}`}>
              <StatisticNumbers data={numbersData.marketplaces}/>
            </li>
          </ul>
          <button className={styles.button}>Заказать</button>
          <p className={styles.ps}>Указаны средние показатели со всех кампаний*</p>
        </div>

      </div>
    </section>
  )
}