import React from "react";
import UserContext from './context.js'

function Home(){
    const ctx = React.useContext(UserContext);
    return(
        <h1>Home<br/>
            {JSON.stringify(ctx)}
        </h1>
    )
}

export default Home;
