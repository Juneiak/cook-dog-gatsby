import * as React from "react";
import * as styles from './team.module.css';
import TeamCard from "./team-card/team-card";
import {BasicButton} from '../../../ui';
import {teamData} from '../../../../misc/data';

export default function Team() {

  return (
    <section className={styles.team}>
      <div className={styles.content}>
        <h2 className={styles.title}>Ваша команда профессионалов <span style={{fontWeight: '400'}}></span> готова к работе</h2>
        <ul className={styles.teamList}>
          {teamData.map((teamMemberData, index) => (
            <li key={index} className={styles.listElement}><TeamCard data={teamMemberData} /></li>
          ))}
        </ul>
        <div className={styles.buttonContainer}><BasicButton text='Заполнить бриф' onClick={() => false} color='pink' /></div>
      </div>
    </section>
  )
}