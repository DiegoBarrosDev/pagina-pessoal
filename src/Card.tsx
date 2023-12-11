import "./Card.css";

interface CardProps{
    imagem: string;
    texto: string;
    classe: string;
}

export default function Card({imagem, texto, classe}: CardProps){
    return(
        <div className={classe} id="servicos">
            <div className="card_conteudo">
                <img src={imagem} className="imagem_card"/>
                <p className="texto_card">{texto}</p>
            </div>
        </div>
    )
}