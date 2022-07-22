import logo1 from "./img/logo.png"

function Tela1({setPlay}){
    return(
        <div className="initial">
            <div>
            <img className="logo1" src={logo1} alt="Logo"/>
            ZapRecall
            </div>
            <div className="buttom" onClick={() => setPlay(true)}>
                Iniciar Recall!
            </div>  
        </div>
    )
}

export default Tela1;