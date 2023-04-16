
import map from '../../img/map.svg'
import home from '../../img/home.svg'
import phone from '../../img/phone2.svg'
import percent from '../../img/percent.svg'

import styles from './contacts.module.scss'

const Contacts: React.FC = () => {
   return (
      <div className={styles.contacts}>
         <p className={styles.title}>Контакты</p>
         <div className={styles.phones}>
            <div>
               <img className={styles.home} src={home} alt='home' />
               <p>Бухгалтерия, склад</p>
               <span>+7 82140 92619</span>
            </div>
            <div>
               <img className={styles.percent} src={percent} alt='percent' />
               <p>Вопросы по системе лояльности</p>
               <span>+7 908 716 33 97</span>
            </div>
         </div>
         <div className={styles.address}>
            <p className={styles.title2}>Наши магазины</p>
            <div>
               <div>
                  <img className={styles.home} src={home} alt='home' />
                  <img className={styles.phone} src={phone} alt='phone' />
                  <p>ул. Дорожная 10</p>
                  <span>+7 904 271 35 90</span>
               </div>
               <div>
                  <img className={styles.home} src={home} alt='home' />
                  <img className={styles.phone} src={phone} alt='phone' />
                  <p>ул. Советская 87</p>
                  <span>+7 82140 91330</span>
               </div>
               <div>
                  <img className={styles.home} src={home} alt='home' />
                  <img className={styles.phone} src={phone} alt='phone' />
                  <p>ул. Заводская 16</p>
                  <span>+7 82140 91101</span>
               </div>
               <div>
                  <img className={styles.home} src={home} alt='home' />
                  <img className={styles.phone} src={phone} alt='phone' />
                  <p>ул. Рабочая 1</p>
                  <span>+7 82140 91300</span>
               </div>
            </div>
         </div>
         <div className={styles.map}>
            <img src={map} alt='map' />
         </div>
      </div>
   )
}

export default Contacts;