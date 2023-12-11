import React from 'react';

import './App.css';
import Header from './Header';

import Card from './Card';
import Contato from './Contato';


function App() {
  return (
    <div className="App">
      <Header/>
      <Card imagem="/images/imagem2.jpg" texto="Criamos aplicações web sob 
      medida, desde websites informativos até plataformas de comércio eletrônico 
      robustas. Cada projeto é único, desenvolvido para atender às suas necessidades 
      específicas e às expectativas do seu público." classe="card_claro"/>
      <Card imagem="/images/imagem1.jpg" texto="Nosso foco está na criação de interfaces 
      intuitivas e experiências de usuário envolventes. Garantimos que seus visitantes 
      tenham uma jornada online memorável, seja em desktops, tablets ou dispositivos 
      móveis." classe="card_escuro"/>
      <Card imagem="/images/imagem3.jpg" texto="Nossas aplicações web são criadas com 
      design responsivo, garantindo uma aparência e funcionalidade perfeitas em 
      qualquer dispositivo. Isso significa que você pode alcançar seu público-alvo onde 
      quer que estejam, proporcionando uma experiência consistente e impressionante." 
      classe="card_claro"/>
      <Card imagem="/images/imagem4.jpg" texto="Não apenas criamos aplicações web 
      incríveis, mas também oferecemos suporte técnico contínuo e serviços de 
      manutenção para garantir que sua presença online permaneça eficiente e 
      atualizada." classe="card_escuro"/>
      <Contato/>
    </div>
  );
}

export default App;
