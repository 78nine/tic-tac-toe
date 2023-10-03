import styles from './NextMove.module.scss';
import { useSelector } from "react-redux";
// import globalStyles from '../../styles/global.module.css'
// import typographyStyles from '../../styles/typography.module.css';

function NextMove(props) {
    const nextMove = useSelector((state) => state.nextMove);
    function value(val) {
      let content;
      if (val == 1) {
          content = <i className="fa fa-linux"></i>
      } else if(val == 0) {
          content =  <i className="fa fa-windows"></i>
      } 
      return content;
    }
    return (
      <div className={`${styles.whiteText}`}>
         Next move: {value(nextMove)}
      </div>
    );
  }
  
  export default NextMove;