import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increment } from "../../features/counter/counterSlice";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
      <span>{count}</span>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
