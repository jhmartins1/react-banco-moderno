import styles from "../style"
import { arrowUp } from '../assets'

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[148px] h-[148px] 
  rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary 
    w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Comece</span>
        </p>
        <img
          src={arrowUp}
          className="w-[23px] h-[23px] object-contain"
          alt="arrow"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Agora mesmo</span>
      </p>
    </div>
  </div>
)

export default GetStarted