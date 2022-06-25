import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./actions";

function App() {
  const counterState = useSelector(state => state.counterReducer);
  const isLoggedIn = useSelector(state => state.isLoggedInReducer);
  const dispatch = useDispatch();
  return (
      <div className="App">
        <h1>Counter is: {counterState}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          {isLoggedIn ? <h3>Some info only authorized people should see</h3> : ''}
      </div>
  );
}

export default App;
