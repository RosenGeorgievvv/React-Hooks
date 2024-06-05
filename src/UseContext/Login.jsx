import { useContext } from "react";
import { AppContext } from "./ContextTutorial";

function Login(){
    return(
        <div>
            <input onChange={(e) =>{
                setUsername(e.target.value)
            }}
            />
        </div>
    )
}
export default Login;