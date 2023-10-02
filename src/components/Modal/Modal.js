import { useDispatch, useSelector } from 'react-redux';
import styles from './Modal.module.scss';
import { reset } from '../../store';
import Button from '../Button/Button';

function Modal(props) {
    const theWinner = useSelector(state => state.winner);
    console.log('theWinner', theWinner);
    const dispatch = useDispatch();
    const resetFunc = () => dispatch(reset());
    function value(val) {
      let content;
      if (val == 1) {
          content = <i className="fa fa-linux"></i>
      } else if(val == 0) {
          content =  <i className="fa fa-windows"></i>
      } 
      console.log(content);
      return content;
  }
    return (
      <div className="center">
        {(theWinner || theWinner == 0) && <>
            <strong>
                {theWinner !== "draw" && (<>The Winner is: {value(theWinner)}</>)} 
                {theWinner === "draw" && `It's a ${theWinner}`}
            </strong>
            <br/>
        </>}
          {(theWinner || theWinner == 0) && <Button action={resetFunc}>Play Again</Button>}
      </div>
    );
  }
  
  export default Modal;