import styles from './Board.module.scss';
import Field from '../Field/Field';
import Modal from '../Modal/Modal';
import { useSelector } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';
//import globalStyles from '../../styles/global.module.css';

function Board(props) {
    console.log(props);
    const whatIsTheCombination = useSelector(state => state.winningCombination);
    return (
      <div className={`${styles.flex} ${styles.wrap} ${styles.width}`} style={{"--board-size": props.size}}>
        {
            props.values.map((value, index) => (
                <Field key={index} className={`${styles.flex}`} value={value} index={index} selected={Array.isArray(whatIsTheCombination) && whatIsTheCombination.includes(index)}/>
            ))   
        }
      </div>
    );
  }
  
  export default Board;

// values (array of: "x", "o" or null) - these are the values of the fields rendered in the Board