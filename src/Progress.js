import React, { useState } from "react";
import party from "./img/party.png";
import sad from "./img/sad.png";
function Progress(props){
    const [Zap, setZap] = useState(0);
    if (props.ColorsProgress !== "green" && props.IconsProgress.length !== 0 && Zap === 0){
        setZap(1);
    }
    if (props.IconsProgress.length === 8){
        if (Zap === 0){
            return(
                <div className="fundo concluido">
                    <div className="message1">
                        <img src={party} alt="emoji"/> Parabens!
                    </div>
                    <div className="message2">
                       <p>Você não esqueceu de</p>
                       <p>nenhum flashcard!</p>
                    </div>
                    <div>
                        {props.IconsProgress.length}/8 CONCLUÍDOS
                    </div>
                    <div className="icons">
                        {props.IconsProgress.map((icons)=><img src={icons} alt="icones"/>)}
                    </div>
                </div>);
        } else {
            return(
                <div className="fundo concluido">
                    <div className="message1">
                        <img src={sad} alt="emoji"/> Putz...
                    </div>
                    <div className="message2">
                       <p>Ainda falta alguns...</p>
                       <p>Mas não desanime!</p>
                    </div>
                    <div>
                        {props.IconsProgress.length}/8 CONCLUÍDOS
                    </div>
                    <div className="icons">
                        {props.IconsProgress.map((icons)=><img src={icons} alt="icones"/>)}
                    </div>
                </div>);
        }
    };
    return(
    <div className="fundo andamendo">
        <div>
        {props.IconsProgress.length}/8 CONCLUÍDOS
        </div>
        <div className="icons">
            {props.IconsProgress.map((icons)=><img src={icons} alt="icones"/>)}
        </div>
    </div>);
};

export default Progress;