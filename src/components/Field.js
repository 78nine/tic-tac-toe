import styles from './Field.module.css';
import './../styles/settings.css';

function Field(props) {
  console.log(styles);
    return (
      <div className={styles.container}>
          <strong className={styles.textAccent}>{props.value}</strong>
      </div>
    );
  }
  
  export default Field;