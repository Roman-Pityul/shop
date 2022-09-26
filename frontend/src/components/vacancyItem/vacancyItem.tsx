import React from 'react';

import phone from '../../img/phone2.svg'

import styles from './vacancyitem.module.scss'

const VacancyItem = () => {
   return (
      <div className={styles.item}>
         <p className={styles.title}>Должность</p>
         <div className={styles.block}>
            <p>Требования</p>
            <span>Текст про требования текст про требования текст про требования текст про требования текст про требования</span>
         </div>
         <div className={styles.block}>
            <p>Обязанности</p>
            <span>Текст про обязаности текст про обязаности текст про обязаности текст про обязаности текст про обязаности</span>
         </div>
         <div className={styles.block}>
            <p>Условия</p>
            <span>Текст про условия текст про условия текст про условия текст про условия текст про условия текст про условия</span>
         </div>
         <p>Звоните</p>
         <p>
            <img src={phone} alt="phone" />
            +7 904 271 35 90
         </p>
      </div>
   );
};

export default VacancyItem;