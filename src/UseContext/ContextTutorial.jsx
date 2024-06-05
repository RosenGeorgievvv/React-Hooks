import { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

const AppContext = createContext(null);

function ContextTutorial(){
    const [username, setUsername] = useState("");

    return(
        <AppContext.Provider value={{username, setUsername}}>
            <Login  />
            <User  />
        </AppContext.Provider>
    )
}
export default ContextTutorial;