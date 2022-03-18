import { useReducer } from 'react';

const initialState = {
  count: 0,
};

interface CounterState {
  count: number;
}

interface UpdatedState {
  type: 'increment' | 'decrement';
  payload: number;
}
interface ResetState {
  type: 'reset';
}

type ActionState = UpdatedState | ResetState;

function reducer(state: CounterState, action: ActionState) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + action.payload,
      };
    case 'decrement':
      return {
        count: state.count - action.payload,
      };

    case 'reset':
      return initialState;

    default:
      return state;
  }
}

const UserReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default UserReducer;
