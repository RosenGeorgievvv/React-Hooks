import { useState } from "react";

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {counter}
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default StateTutorial;


//Theorical explanation:

// useState hooks is mainly use to control state. The useState hook has two parameters:
// The first one is the variable. The second one is a function. We can give a default value. In my case it is zero.
