// import { useDispatch, useSelector } from 'react-redux';
import styles from './SingleChoice.module.scss';
import React, { useState } from 'react';
//import { onFieldClick } from '../../store';
// import globalStyles from '../../styles/global.module.css'
// import typographyStyles from '../../styles/typography.module.css';

function SingleChoice(props) {
  
    // otrzyma dwa propsy: 1. action - co ma się stać gdy ktoś coś wybrał // 2. options - tablica tekstów które ma wyświetlić.
    return (
        <div className="flex">
           {props.options.map((option) => <div className={styles.frame + ' ' + (option == props.value ? styles.selected : '')} onClick={() => {props.action(option)}}>{option}</div>)} 
           
        </div>

    );
}

export default SingleChoice;