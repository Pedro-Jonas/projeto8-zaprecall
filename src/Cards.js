import virar from "./img/setinha.png";
import React from "react";
import erro from "./img/erro.svg";
import great from "./img/great.svg";
import question from "./img/question.svg";

function CardInitial(props){
    return(
    <div className="card">
        Pergunta {props.number}
        <ion-icon name="play-outline" onClick={()=> props.setPlayQuestions(true)}></ion-icon>
    </div>
    );
};

function CardSelected(props){
    const [Rotate, setRotate] = React.useState(false);
    const [Check, SetCheck] = React.useState(true);
    const [Color, SetColor] = React.useState("");
    const [Icon, SetIcon] = React.useState("");
    function checklist(icon, color1, color2){
        const updateprogress = [...props.IconsProgress, icon];
        props.setIconsProgress(updateprogress);
        props.setColorsProgress(color2);
        SetCheck(false);
        SetColor(color1);
        SetIcon(icon);
    }
    return( Rotate? 
    (Check?(
    <div className="card selected">
        <div className="answer">
            {props.answer} 
        </div>
        <div className="options">
            <div className="buttons redbuttom" onClick={()=>checklist(erro , "check red", "red")}>
                <p>Não</p> <p>lembrei</p>
            </div>
            <div className="buttons orangebuttom" onClick={()=>checklist(question , "check orange", "orange")}>
                <p>Quase Não</p> <p>lembrei</p>
            </div>
            <div className="buttons greenbuttom" onClick={()=>checklist(great , "check green", "green")}>
                zap!
            </div>
        </div>
    </div>) : (
    <div className={Color}>
        Pergunta {props.number}
        <img src={Icon} alt="icon"/>
    </div>
    ))
        :
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
    return(PlayQuestion? (<CardSelected question={props.question} answer={props.answer} number={props.number}  
    setIconsProgress={props.setIconsProgress} IconsProgress={props.IconsProgress} 
    ColorsProgress={props.ColorsProgress} setColorsProgress={props.setColorsProgress}/>) : 
    (<CardInitial number={props.number} setPlayQuestions={setPlayQuestions}/>)
    );
};

function Cards(props){
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
    };

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
        {Infocards.map((card)=> <Card number={card.number} question={card.question} answer={card.answer} 
        setIconsProgress={props.setIconsProgress} IconsProgress={props.IconsProgress} 
        ColorsProgress={props.ColorsProgress} setColorsProgress={props.setColorsProgress}/>)}
    </div>
    );
};

export default Cards;