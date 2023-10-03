// import { useDispatch, useSelector } from 'react-redux';
import SingleChoice from '../SingleChoice/SingleChoice';
import styles from './StartPage.module.scss';
import React, { useState } from 'react';
//import { onFieldClick } from '../../store';
// import globalStyles from '../../styles/global.module.css'
// import typographyStyles from '../../styles/typography.module.css';

function StartPage(props) {
    const [boardSize, setBoardSize] = useState(3);
    const [whoStarts, setWhoStarts] = useState('x');
  
    const handleInput1Change = (e) => {
      //setInput1(e.target.value);
    };
  
    return (
        <>
            <h1>Łelkom</h1>
            <div>
                <h1>Starting Page</h1>
                <div>
                    <label>Choose board size:</label>
                    <SingleChoice action={setBoardSize} options={[3,4,5,6]}  value={boardSize}/>    
                </div>
                <div>
                    <label>Who starts?</label>
                    <SingleChoice action={setWhoStarts} options={["x","o"]}  value={whoStarts}/>
                </div>
                <button type="submit">Play game</button>
            </div>
        </>

    );
}

export default StartPage;