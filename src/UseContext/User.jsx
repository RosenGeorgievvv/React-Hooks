import { useContext } from "react";
import { AppContext } from "./ContextTutorial";

const {username} = useContext(AppContext);

function User(props){
    return(
        <div>
            <h1>User: {username}</h1>
        </div>
    );
}
export default User;