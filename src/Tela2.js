import logo2 from "./img/logo-pequeno.png";
import Cards from "./Cards";
import Progress from "./Progress"
import React from "react";

function Initial(){
    return(
        <div className="initial2">
            <img className="logo2" src={logo2} alt="Logo"/>
            ZapRecall
        </div>
    );
};

function Tela2(){
    const [IconsProgress, setIconsProgress] = React.useState([]);
    const [ColorsProgress, setColorsProgress] = React.useState("");
    return(
        <>
        <Initial/>
        <Cards setIconsProgress={setIconsProgress} IconsProgress={IconsProgress} ColorsProgress={ColorsProgress} setColorsProgress={setColorsProgress}/>
        <Progress setIconsProgress={setIconsProgress} IconsProgress={IconsProgress} ColorsProgress={ColorsProgress} setColorsProgress={setColorsProgress}/>
        </>
    );
};

export default Tela2;