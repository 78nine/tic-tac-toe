import styles from './Points.module.scss';
import { useSelector } from "react-redux";

function Points(props) {
    const pointsX = useSelector((state) => state.xWins);
    const pointsO = useSelector((state) => state.oWins);
    return (
      <div className={`center ${styles.pointsPadding}`}>
          <h1>Points: </h1>
          <p><i className="fa fa-windows"></i>: {pointsX} - <i className="fa fa-linux"></i>: {pointsO}</p>
      </div>
    );
  }
  
  export default Points;