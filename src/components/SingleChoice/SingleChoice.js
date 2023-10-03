// import { useDispatch, useSelector } from 'react-redux';
import styles from './SingleChoice.module.scss';
import React, { useState } from 'react';
import Button from '../Button/Button';
//import { onFieldClick } from '../../store';
// import globalStyles from '../../styles/global.module.css'
// import typographyStyles from '../../styles/typography.module.css';

function SingleChoice(props) {
  
    // otrzyma dwa propsy: 1. action - co ma się stać gdy ktoś coś wybrał // 2. options - tablica tekstów które ma wyświetlić.
    function icon(opt, props) {
        let content;
    
        if (opt == 1) {
            content = <i className="fa fa-linux"></i>
        } else if(opt == 0) {
            content =  <i className="fa fa-windows"></i>
        } else {
            content = opt;
        }
        return content;
    }

    return (
        <div className="flex center flex-center">
           {props.options.map((option) => <Button className={styles.frame + ' ' + (option == props.value ? styles.selected : '')} action={() => {props.action(option)}}>{ icon(option) }</Button>)} 
        </div>
    );
}

export default SingleChoice;