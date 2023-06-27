import styles from './Field.module.css';
import globalStyles from '../../styles/global.module.css'
import typographyStyles from '../../styles/typography.module.css';

function Field(props) {
  console.log('field props', props);
    return (
      <div className={`${styles.container} ${styles.box} ${styles.flex}`}>
          <strong className={`${globalStyles.textAccent} ${typographyStyles["fs-500"]}`}>{props.value}</strong>
      </div>
    );
  }
  
  export default Field;