import Board from "../Board/Board";
import { useSelector } from "react-redux";
import NextMove from "../NextMove/NextMove";
import Modal from "../Modal/Modal";
import Points from "../Points/Points";
function PlayPage() {
    const values = useSelector((state) => state.values);
    const size = useSelector((state) => state.size);
    return (
        <>
            <Points />
            <Board values={values} size={size} />
            <NextMove />
            <Modal />
        </>
    );
}

export default PlayPage;