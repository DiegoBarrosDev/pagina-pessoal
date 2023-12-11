import { MouseEventHandler } from "react";
import "./Botao.css";

interface BotaoProps{
    texto: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Botao ({ texto, onClick }: BotaoProps) {
    return (
      <button onClick={onClick} className="botao">
        {texto}
      </button>
    );
  };
  