import Button from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">
        {counterValue}
      </h1>
      <Button data-testid="increment-button" onClick={handleIncrement}>+</Button>
      <Button data-testid="decrement-button" onClick={handleDecrement}>-</Button>
    </div>
  );
};
