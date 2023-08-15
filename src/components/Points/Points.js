import styles from './Points.module.scss';
import { useSelector } from "react-redux";

function Points(props) {
    const pointsX = useSelector((state) => state.xWins);
    const pointsO = useSelector((state) => state.oWins);
    return (
      <div className={`center ${styles.pointsPadding}`}>
          <h1>Points: </h1>
          <p>X: {pointsX} - O: {pointsO}</p>
      </div>
    );
  }
  
  export default Points;