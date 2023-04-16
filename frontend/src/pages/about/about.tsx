
import people from '../../img/people.svg'
import check from '../../img/check.svg'
import logo from '../../img/logo.svg'
import styles from './about.module.scss'

const About: React.FC = () => {
   return (
      <div>
         <div className={styles.head}>
            <div className={styles.left}>
               <span>О компании</span>
               <p>Мы непрерывно развиваемся и работаем над совершенствованием сервиса, заботимся о наших клиентах, стремимся к лучшему будущему.</p>
            </div>
            <div className={styles.right}>
               <img src={people} alt='people' />
            </div>
         </div>
         <div className={styles.center}>
            <div className={styles.block}>
               <img src={check} alt='check' />
               <div className={styles.title}>Мы занимаемся розничной торговлей</div>
               <div className={styles.description}>Более 20 лет.</div>
            </div>
            <div className={styles.block}>
               <img src={check} alt='check' />
               <div className={styles.title}>Основная миссия компании</div>
               <div className={styles.description}>Максимальное качество товаров и услуг по доступной цене.</div>
            </div>
            <div className={styles.block}>
               <img src={check} alt='check' />
               <div className={styles.title}>Отличительная черта нашей сети</div>
               <div className={styles.description}>Здоровая и полезная продукция местного производства внаших магазинах.</div>
            </div>
         </div>
         <div className={styles.bottom}>
            <div>
               <img src={logo} alt='logo' />
               <div>Спасибо за то, что вы с нами. Северяночка, везет всегда!</div>
            </div>
         </div>
      </div>
   )
}

export default About