
//import globalStyles from '../../styles/global.module.css';

function Button(props) {

    return (
        <button type={props.type || "button"} onClick={props.action} className={props.className}>{props.children}</button>
    );
  }
  
  export default Button;