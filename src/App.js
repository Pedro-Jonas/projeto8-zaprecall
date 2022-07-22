import React from "react";
import Tela1 from "./Tela1";
import Tela2 from "./Tela2";

function App(){
    const [play, setPlay] = React.useState(false);
    console.log(play)
    return(
        <>
        {play?(<Tela2/>):(<Tela1 setPlay={setPlay}/>)}
        </>
    );
}

export default App;
