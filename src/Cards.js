import virar from "./img/setinha.png"
import React from "react";

function CardInitial(props){
    return(
    <div className="card">
        Pergunta {props.number}
        <ion-icon name="play-outline" onClick={()=> props.setPlayQuestions(true)}></ion-icon>
    </div>
    );
};

function CardSelected(props){
    const [Rotate, setRotate] = React.useState(false)
    return( Rotate? 
    (<div className="card selected">
        <div className="answer">
        {props.answer}
        </div>
        <div className="options">
            <div className="buttons red">
                <p>Não</p> <p>lembrei</p>
            </div>
            <div className="buttons orange">
                <p>Quase Não</p> <p>lembrei</p>
            </div>
            <div className="buttons green">
                zap!
            </div>
        </div>
    </div>) :
    (<div className="card selected">
        <div>
            {props.question}
        </div>
        <div className="setinha">
            <img src={virar} alt="Virar" onClick={()=>setRotate(true)}/>
        </div>
     </div>)
    );
};

function Card(props){
    const [PlayQuestion, setPlayQuestions] = React.useState(false);
    return(PlayQuestion? (<CardSelected question={props.question} answer={props.answer}/>) : 
    (<CardInitial number={props.number} setPlayQuestions={setPlayQuestions}/>)
    );
}

function Cards(){
    let questions = [
    {Q:"O que é JSX?", R:"Uma extensão de linguagem do JavaScript" },
    {Q:"O React é __" , R:"uma biblioteca JavaScript para construção de interfaces"},
    {Q:"Componentes devem iniciar com __ " , R: "letra maiúscula"},
    {Q:"Podemos colocar __ dentro do JSX", R: "expressões"},
    {Q:"O ReactDOM nos ajuda __ ", R: "interagindo com a DOM para colocar componentes React na mesma"},
    {Q:"Usamos o npm para __ ", R: " interagindo com a DOM para colocar componentes React na mesma"},
    {Q:"Usamos props para __ ", R: "passar diferentes informações para componentes"},
    {Q:"Usamos estado (state) para __ ", R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ];

    function comparador() { 
        return Math.random() - 0.5; 
    }

    questions.sort(comparador)
    let Infocards = [
        {number: 1, question: questions[0].Q, answer: questions[0].R},
        {number: 2, question: questions[1].Q, answer: questions[1].R},
        {number: 3, question: questions[2].Q, answer: questions[2].R},
        {number: 4, question: questions[3].Q, answer: questions[3].R},
        {number: 5, question: questions[4].Q, answer: questions[4].R},
        {number: 6, question: questions[5].Q, answer: questions[5].R},
        {number: 7, question: questions[6].Q, answer: questions[6].R},
        {number: 8, question: questions[7].Q, answer: questions[7].R},
    ];
    return(
    <div className="cards">
        {Infocards.map((card)=> <Card number={card.number} question={card.question} answer={card.answer}/>)}
    </div>
    );
}

export default Cards;