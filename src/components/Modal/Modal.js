import { useDispatch, useSelector } from 'react-redux';
import styles from './Modal.module.scss';
import { reset } from '../../store';

function Modal(props) {
    const theWinner = useSelector(state => state.winner);
    const dispatch = useDispatch();
    const resetFunc = () => dispatch(reset());
    return (
      <div className="center">
        {theWinner && <>
            <strong>
                {theWinner !== "draw" && `The Winner is: ${theWinner}`}
                {theWinner === "draw" && `It's a ${theWinner}`}
            </strong>
            <br/>
        </>}
          {theWinner && <button onClick={resetFunc}>Play Again</button>}
      </div>
    );
  }
  
  export default Modal;