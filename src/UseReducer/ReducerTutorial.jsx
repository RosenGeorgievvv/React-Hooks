import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
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
      <h1>{state.count}</h1>
      <button onClick={() => {dispatch({type: "INCREMENT"}); dispatch({type: 'toggleShowText'})}}>Click Here</button>
      {state.showText && <p>Show my text</p>}
    </div>
  );
};

export default ReducerTutorial;


//useReducer hooks is mainly used to manage several states. It behaves closely like useState hook.
//Usually reducer func is being created where each action is being described in switch/case.
//We choose the type of action on a onClick func in this example through dispatch.
