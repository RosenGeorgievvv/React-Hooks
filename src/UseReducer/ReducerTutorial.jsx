import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENET":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
        return {count: state.count, showText: !state.showText};
        default:
            return state;
  }
};
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
