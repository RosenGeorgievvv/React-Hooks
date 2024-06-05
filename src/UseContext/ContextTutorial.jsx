import { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

const AppContext = createContext(null);

function ContextTutorial(){
    const [username, setUsername] = useState("");

    return(
        <div>
            <Login  />
            <User  />
        </div>
    )
}
export default ContextTutorial;