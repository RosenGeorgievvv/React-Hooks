import { useRef } from "react";
 
const RefTutorial = () =>{

    const inputRef = useRef(null);

    const clickRefFunc = () =>{
        inputRef.current.focus();
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