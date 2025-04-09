import React from 'react';
import styles from "./Header.module.scss";
import { formatedData } from '@/utils/formatDate/formatDate';


type HeaderProps = {
  userName: string;
};


const Header: React.FC<HeaderProps> = ({ userName }) => {
  const todayData = formatedData(new Date());

  return (
    <div className={styles.header}>
      <img src="./images/logo.png" alt="Logo FocalPoint" className={styles.headerLogo} />
      <p className={styles.headerWelcomeText}>Bem-vindo de volta, {userName}</p>
      <p className={styles.headerDataText}>{todayData}</p>
    </div>
  );
};

export default Header;
