import * as React from "react";
import * as styles from './statistic-numbers.module.css';

export default function StatisticNumbers({ data }) {

  return (
    <ul className={styles.list}>
      {data.map((stat, index) => (
        <li key={index} className={styles.listElement}>
          <p className={styles.number}>{stat.number}</p>
          <p className={styles.about}>{stat.aboutNumber}</p>
        </li>
      ))
      }
    </ul>
  )
}