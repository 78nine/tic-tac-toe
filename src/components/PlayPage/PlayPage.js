import Board from "../Board/Board";
import { useSelector } from "react-redux";
import NextMove from "../NextMove/NextMove";
import Modal from "../Modal/Modal";
import Points from "../Points/Points";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { startAgain } from "../../store";
import styles from './PlayPage.module.scss';

import Button from "../Button/Button";

function PlayPage() {
    const values = useSelector((state) => state.values);
    const size = useSelector((state) => state.size);
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    useEffect(() => {
        if(!size) {
            navigate('/');
        }
    },[size]);
    
    return (
        <div className={`center ${styles.centerElements}`}>
            <Points />
            <Button text="Start Over" action={() => {dispatch(startAgain())}} />
            <Board values={values} size={size} />
            <NextMove />
            <Modal />
        </div>
    );
}

export default PlayPage;