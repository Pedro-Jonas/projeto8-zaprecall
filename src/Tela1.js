import logo1 from "./img/logo.png"

function Logo(){
    return(
    <div>
        <img className="logo1" src={logo1} alt="Logo"/>
        ZapRecall
    </div>
    );
};

function Buttom({setPlay}){
    return(
    <div className="buttom" onClick={() => setPlay(true)}>
        Iniciar Recall!
    </div>  
    );
};

function Tela1({setPlay}){
    return(
        <div className="initial">
            <Logo/>
            <Buttom setPlay={setPlay}/>
        </div>
    )
}
export default Tela1;