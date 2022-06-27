import * as React from "react";
import * as styles from './team-card.module.css';
import { MediaImage } from "../../../../ui";

export default function TeamCard({data: {name, prof, image}}) {

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}><MediaImage image={image} image_webp={false} image_480={false} image_480_web={false} /></div>
      <p className={styles.name}>{name}</p>
      <p className={styles.prof}>{prof}</p>
    </article>
  )
}