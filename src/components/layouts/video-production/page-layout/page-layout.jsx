import * as React from "react";
import * as styles from './page-layout.module.css';
import '../../../../styles/global.css';

export default function PageLayout({ children }) {

  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}