import React from 'react'
import styles from "./Btn.module.scss";


interface Btn {
    title: string;
    func: Function;
  }


const Btn: React.FC<Btn> = ({ title, func }) => {

  return (
    <button className={styles.btn} onClick={func}>{title}</button>
  )
}

export default Btn