function changeLanguage(language) {
    document.getElementById('current-language').innerText = language;
    if(language==='Español'){
        //navbar
        document.getElementById('n1').innerText = "Inicio";
        document.getElementById('n2').innerText = "Nosotros";
        document.getElementById('n3').innerText = "Apuestas";
        document.getElementById('n4').innerText = "Testimonios";
        //inicio
        document.getElementById('slogan').innerText = "¡ÚNETE AL MEJOR GRUPO DE APUESTAS Y GANA CON NOSOTROS!";
        //nosotros
        document.getElementById('pregunta').innerText = "¿Por qué elegirnos?";
        document.getElementById('t1').innerText = "En nuestra plataforma de apuestas online, garantizamos emoción y ganancias a lo grande. ¿Por qué escogernos? Porque somos tu mejor jugada para aciertos y victorias. Con una amplia gama de opciones, desde deportes hasta juegos de casino, cada apuesta es una oportunidad para ganar en grande.";
        document.getElementById('t2').innerText = "Nuestro grupo se destaca por ofrecer cuotas irresistibles y promociones exclusivas que maximizan tus ganancias. Únete a nosotros y descubre el lugar donde cada apuesta cuenta y cada victoria es aún más emocionante.¡Apuesta por el éxito con nosotros!";
        document.getElementById('h1').innerText = "#EsoBradPicks";
        document.getElementById('h2').innerText = "#UneteAEsoBrad";
        document.getElementById('h3').innerText = "#EsoBradVIP";
        //formulario
        document.getElementById('fti').innerText = "DÉJANOS TU CONTACTO";
        document.getElementById('fte').innerText = "Completa el formulario a continuación y se parte de este grupo exclusivo. Estamos ansiosos por comenzar este viaje contigo. ¡Gracias por confiar en nosotros!";
        document.getElementById('l1').innerText = "Ingresa tu nombre";
        document.getElementById('l2').innerText = "Ingresa tu correo";
        document.getElementById('l3').innerText = "Ingresa tu teléfono";
        document.getElementById('lb').innerText = "Enviar";
        //footer
        document.getElementById('f1').innerText = "INICIO";
        document.getElementById('f2').innerText = "CONTACTO";
        document.getElementById('f3').innerText = "PRIVACIDAD";
        document.getElementById('f4').innerText = "APUESTAS";
        document.getElementById('f5').innerText = "CASAS DE APUESTAS";
        document.getElementById('f6').innerText = "TESTIMONIOS";
    }
    if(language==='English'){
        //navbar
        document.getElementById('n1').innerText = "Home";
        document.getElementById('n2').innerText = "Us";
        document.getElementById('n3').innerText = "Bets";
        document.getElementById('n4').innerText = "Testimonials";
        //inicio
        document.getElementById('slogan').innerText = "JOIN THE BEST BETTING GROUP AND WIN WITH US!";
        //nosotros
        document.getElementById('pregunta').innerText = "Why choose us?";
        document.getElementById('t1').innerText = "On our online betting platform, we guarantee excitement and big wins. Why choose us? Because we are your best bet for successes and victories. With a wide range of options, from sports to casino games, every bet is a chance to win big.";
        document.getElementById('t2').innerText = "Our group stands out for offering irresistible odds and exclusive promotions that maximize your profits. Join us and discover the place where every bet counts and every victory is even more exciting. Bet on success with us!";
        document.getElementById('h1').innerText = "#EsoBradPicks";
        document.getElementById('h2').innerText = "#JoinEsoBrad";
        document.getElementById('h3').innerText = "#EsoBradVIP";
        //formulario
        document.getElementById('fti').innerText = "LEAVE US YOUR CONTACT";
        document.getElementById('fte').innerText = "Complete the form below and be part of this exclusive group. We can't wait to start this journey with you. Thanks for trusting us!";
        document.getElementById('l1').innerText = "Enter your name";
        document.getElementById('l2').innerText = "Enter your e-mail";
        document.getElementById('l3').innerText = "Enter your phone-number";
        document.getElementById('lb').innerText = "Send";
        //footer
        document.getElementById('f1').innerText = "HOME";
        document.getElementById('f2').innerText = "CONTACT";
        document.getElementById('f3').innerText = "PRIVACY";
        document.getElementById('f4').innerText = "BETS";
        document.getElementById('f5').innerText = "BETTING SHOPS";
        document.getElementById('f6').innerText = "TESTIMONIALS";
    }
    if(language==='Portugues'){
        //navbar
        document.getElementById('n1').innerText = "Início";
        document.getElementById('n2').innerText = "Nós";
        document.getElementById('n3').innerText = "Apostas";
        document.getElementById('n4').innerText = "Depoimentos";
        //inicio
        document.getElementById('slogan').innerText = "JUNTE-SE AO MELHOR GRUPO DE APOSTAS E GANHE CONOSCO!";
        //nosotros
        document.getElementById('pregunta').innerText = "Porque escolher-nos?";
        document.getElementById('t1').innerText = "Na nossa plataforma de apostas online garantimos emoção e grandes ganhos. Porque escolher-nos? Porque somos a sua melhor aposta para sucessos e vitórias. Com uma ampla gama de opções, desde esportes até jogos de cassino, cada aposta é uma chance de ganhar muito.";
        document.getElementById('t2').innerText = "Nosso grupo se destaca por oferecer odds irresistíveis e promoções exclusivas que maximizam seus lucros. Junte-se a nós e descubra o lugar onde cada aposta conta e cada vitória é ainda mais emocionante. Aposte no sucesso connosco!";
        document.getElementById('h1').innerText = "#EsoBradPicks";
        document.getElementById('h2').innerText = "#Juntar-seAEsoBrad";
        document.getElementById('h3').innerText = "#EsoBradVIP";
        //formulario
        document.getElementById('fti').innerText = "DEIXE-NOS O SEU CONTACTO";
        document.getElementById('fte').innerText = "Preencha o formulário abaixo e faça parte deste grupo exclusivo. Mal podemos esperar para começar esta jornada com você. Obrigado por confiar em nós!";
        document.getElementById('l1').innerText = "Digite seu nome";
        document.getElementById('l2').innerText = "Digite seu e-mail";
        document.getElementById('l3').innerText = "Digite seu telefone";
        document.getElementById('lb').innerText = "Enviar";
        //footer
        document.getElementById('f1').innerText = "INÍCIO";
        document.getElementById('f2').innerText = "CONTATO";
        document.getElementById('f3').innerText = "PRIVACIDADE";
        document.getElementById('f4').innerText = "APOSTAS";
        document.getElementById('f5').innerText = "CASAS DE APOSTAS";
        document.getElementById('f6').innerText = "DEPOIMENTOS";
    }
}