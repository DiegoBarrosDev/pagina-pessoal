import "./Contato.css";
import "./Botao.css";

function clique(){
    console.log('Botão clicado!');
}

export default function Contato(){
    return(
        <div className="fundo" id="contato">
            <div className="container_formulario">
                <form className="formulario" action="">
                    <h2 className="titulo_formulario">Contate-nos</h2>
                    <fieldset className="secao_formulario">
                        <label htmlFor="nome" className="item_formulario">Nome:</label>
                        <input type="text" name="nome" className="input_formulario" placeholder="Digite o seu nome" id="nome" required/>
                    </fieldset>
                    <fieldset className="secao_formulario">
                        <label htmlFor="email" className="item_formulario">E-mail:</label>
                        <input type="email" name="email" className="input_formulario" placeholder="Digite o seu e-mail" id="email" required/>
                    </fieldset>
                    <fieldset className="secao_formulario">
                        <label htmlFor="mensagem" className="item_formulario">Mensagem:</label>
                        <textarea name="mensagem" rows={5} className="input_formulario" placeholder="Digite a sua mensagem" id="mensagem" required/>
                    </fieldset>
                    <button className="botao">enviar</button>
                </form>
            </div>
        </div>
    )
}