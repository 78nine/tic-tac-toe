import styles from './Field.module.css';

function Field(props) {
    return (
      <div className={styles.container}>
          <strong className={styles.fieldElementCenter}>{props.value}</strong>
      </div>
    );
  }
  
  export default Field;