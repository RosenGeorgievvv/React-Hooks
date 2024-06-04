import { useEffect } from "react";

const URL = "https://swapi.dev/api/people/1";

const EffectTutorial = () => {
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
};

export default EffectTutorial;


//Theorical explanation:

// useEffect hook tells React that your component needs to something after render.
// React will remember the function you passed and call it later after performing the DOM updates.
// The dependency array is really important. It's job is to listen to changes and based on the value set in the array the code inside useEffect will be executed.
// If the dependency array is left empty, it will not listen for anything.