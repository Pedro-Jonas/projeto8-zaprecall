import logo2 from "./img/logo-pequeno.png"

function Initial(){
    return(
        <div className="initial2">
            <img className="logo2" src={logo2} alt="Logo"/>
            ZapRecall
        </div>
    );
}

function Card(props){
    return(
    <div className="card">
        {props.number}
        <ion-icon name="play-outline"></ion-icon>
    </div>
    );
}

function Cards(){
    let Infocards = [
        {number: "Pergunta 1"},
        {number: "Pergunta 2"},
        {number: "Pergunta 3"},
        {number: "Pergunta 4"},
        {number: "Pergunta 5"},
        {number: "Pergunta 6"},
        {number: "Pergunta 7"},
        {number: "Pergunta 8"},
    ];
    return(
    <div className="cards">
        {Infocards.map((card)=> <Card number={card.number}/>)}
    </div>
    );
}

function Fundo(){
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
        <Fundo/>
        </>
    );
}

export default Tela2;