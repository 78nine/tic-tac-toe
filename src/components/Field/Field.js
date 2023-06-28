import styles from './Field.module.scss';
// import globalStyles from '../../styles/global.module.css'
// import typographyStyles from '../../styles/typography.module.css';

function Field(props) {
  console.log(styles);
  console.log('field props', props);
    return (
      <div className={`${styles.container} ${styles.box} ${styles.flex}`}>
          <strong className={`${styles.textAccent} ${styles.fs-800}`}>{props.value}</strong>
      </div>
    );
  }
  
  export default Field;