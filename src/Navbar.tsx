import Botao from "./Botao";
import "./Navbar.css";

function clique(){
    
}

export default function Navbar(){
    return(
        <div className="fundo">
            <nav className="navbar">
                <li  className="navbar_item">
                    <a href="#servicos" className="link">
                        <Botao texto = "serviços" onClick={clique}/>
                    </a>
                </li>
                <li className="navbar_item">
                    <a href="" className="link">
                        <Botao texto = "artigos" onClick={clique}/>
                    </a>
                </li>
                <li className="navbar_item" >
                    <a href="" className="link">
                        <Botao texto = "projetos" onClick={clique}/>
                    </a>
                </li>
                <li className="navbar_item">
                    <a href="" className="link">
                        <Botao texto = "currículo" onClick={clique}/>
                    </a>
                </li>
                <li className="navbar_item">
                    <a href="#contato" className="link">
                        <Botao texto = "contato" onClick={clique}/>
                    </a>
                </li>
            </nav>
        </div>
    )
}