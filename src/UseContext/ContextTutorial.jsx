import { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

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


//technical explanation:
//UseContext hook is used for managing a lot of states.
//STEPS to configure:

//1.)Import createContext
//2.)call createContext and store it in a variable (e.g) const AppContext = createContext();
//3.)Wrap the components inside <AppContext.Provider> ... < /AppContext.Provider>;
//4.)In value you should pass states and functions you want to have access inside the provider.