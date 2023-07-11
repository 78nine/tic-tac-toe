import styles from './Board.module.scss';
import Field from '../Field/Field';
//import globalStyles from '../../styles/global.module.css';

function Board(props) {
    console.log(props);
    return (
      <div className={`${styles.flex} ${styles.wrap} ${styles.width}`} style={{"--board-size": props.size}}>
        {
            props.values.map((value, index) => (
                <Field className={`${styles.flex}`} value={value} index={index}/>
            ))   
        }
      </div>
    );
  }
  
  export default Board;

// values (array of: "x", "o" or null) - these are the values of the fields rendered in the Board