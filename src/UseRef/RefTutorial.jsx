import { useRef } from "react";
 
const RefTutorial = () =>{

    const inputRef = useRef(null);

    const clickRefFunc = () =>{
        inputRef.current.focus();
        console.log(inputRef.current.value);
        inputRef.current.value = '';
    }

    return(
        <div>
            <h1>Rosen</h1>
            <input type="text" placeholder="enter a name" ref={inputRef} />
            <button onClick={clickRefFunc}>Change Name</button>
        </div>
    )
}
export default RefTutorial;

//useRef hook gives a reference. It can also focus an input(e.g).
//Check the above example. There are also a lot of examples of useRef usage.