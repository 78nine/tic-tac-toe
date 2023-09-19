
//import globalStyles from '../../styles/global.module.css';

function Button(props) {

    return (
        <button type={props.type || "button"} onClick={props.action}>{props.text}</button>
    );
  }
  
  export default Button;