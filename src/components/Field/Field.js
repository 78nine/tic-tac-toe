import { useDispatch, useSelector } from 'react-redux';
import styles from './Field.module.scss';
import { setFieldValue } from '../../store';
// import globalStyles from '../../styles/global.module.css'
// import typographyStyles from '../../styles/typography.module.css';

function Field(props) {
    const whatIsNextMove = useSelector(state => state.nextMove);
    const dispatch = useDispatch();
    const changeValue = () => dispatch(setFieldValue({value: whatIsNextMove, index: props.index}));
    return (
      <div className={`${styles.container} ${styles.box} ${styles.flex}`} onClick={changeValue}>
          <strong className={`${styles.textAccent} fs-600`}>{props.value}</strong>
      </div>
    );
  }
  
  export default Field;