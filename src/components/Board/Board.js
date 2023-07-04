import styles from './Board.module.scss';
import Field from '../Field/Field';
//import globalStyles from '../../styles/global.module.css';

function Board(props) {
    console.log(props);
    return (
      <div className={`${styles.flex} ${styles.wrap} ${styles.width}`}>
        {
            props.values.map((value) => (
                <Field className={`${styles.flex}`} value={value} />
            ))   
        }
      </div>
    );
  }
  
  export default Board;

// values (array of: "x", "o" or null) - these are the values of the fields rendered in the Board