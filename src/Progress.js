import React from "react";

function Progress(props){
    console.log(props.IconsProgress)
    return(
    <div className="fundo andamendo">
        <div>
        {props.IconsProgress.length}/8 CONCLUÍDOS
        </div>
        <div className="icons">
        {props.IconsProgress.map((icons)=><ion-icon name={icons}></ion-icon>)}
        </div>
    </div>
    );
}

export default Progress;