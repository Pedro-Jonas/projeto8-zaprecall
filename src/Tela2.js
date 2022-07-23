import logo2 from "./img/logo-pequeno.png"
import Cards from "./Cards";
import React from "react";

function Initial(){
    return(
        <div className="initial2">
            <img className="logo2" src={logo2} alt="Logo"/>
            ZapRecall
        </div>
    );
}

function Progress(){
    return(
    <div className="fundo andamendo">
        0/8 CONCLUÍDOS
    </div>
    );
}

function Tela2(){
    return(
        <>
        <Initial/>
        <Cards/>
        <Progress/>
        </>
    );
}

export default Tela2;