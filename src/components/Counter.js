import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();

  //React redux automatically set up a subcription to the redux store for this componnet
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {

    dispatch({ type: 'increment' })

  }
  const decrementHandler = () => {

    dispatch({ type: 'decrement' })

  }

  const increaseHandler = () => {

    dispatch({ type: 'increase', amount:5 })

  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })

   };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show &&  <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
        <button onClick={increaseHandler}>Increase by 5 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
