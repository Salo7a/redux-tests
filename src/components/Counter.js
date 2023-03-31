import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "../store/feautres/counter/counterSlice";

const Counter = () => {
    const {value: counter, hidden} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const toggleCounterHandler = () => {
        dispatch({type: 'counter/toggleCounter'});
    };
    const handleIncrement = () => {
        dispatch(increment());
    };
    const handleDecrement = () => {
        dispatch(decrement());
    };
    const counterBody = <>
        <div className={classes.value}>{counter}</div>
        <div>
            <button onClick={handleIncrement} className={classes.increment}>+</button>
            <button onClick={handleDecrement} className={classes.decrement}>-</button>
        </div>
    </>
    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {!hidden && counterBody}
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
