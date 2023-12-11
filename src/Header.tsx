import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import Introducao from "./Introducao";

export default function Header() {
    return (
        <div>
            <div className="navSuperior">
                <Navbar />
            </div>
            <header>
                <div className="header">
                    <div className="header_conteudo">
                        <h1 className="header_titulo">Diego Barros</h1>
                        <h2 className="header_subtitulo">Soluções em TI</h2>
                        <h2 className="header_subtitulo">Desenvolvimento FullStack</h2>
                        <div className="introducaoPC">
                            <Introducao />
                        </div>
                    </div>

                </div>
            </header>
            <div className="navInferior">
                <Navbar />
            </div>
            <div className="introducaoMobile">
                <Introducao />
            </div>
        </div>
    )
}

