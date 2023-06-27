import styles from './Field.module.css';
import globalStyles from '../styles/global.css'

function Field(props) {
  console.log(styles);
    return (
      <div className={styles.container}>
          <strong className={globalStyles.textAccent}>{props.value}</strong>
      </div>
    );
  }
  
  export default Field;