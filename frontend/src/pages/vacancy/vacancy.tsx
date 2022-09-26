import React from 'react';

import { VacancyItem } from '../../components'

import styles from './vacancy.module.scss';

const Vacancy = () => {
   return (
      <div className={styles.vacancy}>
         <h1 className={styles.title}>Вакансии</h1>
         <div className={styles.container}>
            {
               [...new Array(6)].map((_, index) => (
                  <VacancyItem key={index} />
               ))
            }
         </div>
      </div>
   );
};

export default Vacancy;