import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slices/counter/counterSlice";

function useCounter() {
  // Access the count state using the counter slice name
  const count = useSelector((state) => state.counter);

  // Initialize dispatch function
  const dispatch = useDispatch();

  // Dispatch increment action
  const incrementCount = () => dispatch(increment());

  // Dispatch decrement action
  const decrementCount = () => dispatch(decrement());

  return { count, incrementCount, decrementCount };
}

export default useCounter;