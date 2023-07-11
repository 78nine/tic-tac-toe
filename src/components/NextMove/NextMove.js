import styles from './NextMove.module.scss';
import { useSelector } from "react-redux";
// import globalStyles from '../../styles/global.module.css'
// import typographyStyles from '../../styles/typography.module.css';

function NextMove(props) {
    const nextMove = useSelector((state) => state.nextMove);
    return (
      <div className={`${styles.whiteText}`}>
         Next move: {nextMove}
      </div>
    );
  }
  
  export default NextMove;