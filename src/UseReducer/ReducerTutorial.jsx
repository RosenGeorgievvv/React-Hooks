import { useReducer } from "react";

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {}}>Click Here</button>
    </div>
  );
};

export default ReducerTutorial;
