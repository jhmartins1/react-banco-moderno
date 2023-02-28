import { card } from '../assets'
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Melhor oferta de cartão <br className='sm:block hidden' /> em poucos passos.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Em poucos passos você pode obter seu cartão agora mesmo.</p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
    </div>
  </section>
)

export default CardDeal