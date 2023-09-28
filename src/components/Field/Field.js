import { useDispatch, useSelector } from 'react-redux';
import styles from './Field.module.scss';
import { onFieldClick } from '../../store';
// import globalStyles from '../../styles/global.module.css'
// import typographyStyles from '../../styles/typography.module.css';

function Field(props) {
    const whatIsNextMove = useSelector(state => state.nextMove);
    const dispatch = useDispatch();
    const changeValue = () => dispatch(onFieldClick({value: whatIsNextMove, index: props.index}));

    function value(val) {
      let content;
      if (val == "x") {
          content = <i className="fa fa-linux"></i>
      } else if(val == "o") {
          content =  <i className="fa fa-windows"></i>
      } 
      return content;
  }
    return (
      <div className={`${styles.container} ${styles.box} ${styles.flex} ${props.selected && styles.winningGreen}`} onClick={changeValue}>
          <strong className={`${styles.textAccent} fs-600`}>{value(props.value)}</strong>
      </div>
    );
  }
  
  export default Field;