import './css/LandingPage.css';

const BicyclePage = () => {
    return (
        <body id="bicicleta">
        <header class="header-bg">
            <div class="header container">
            <a href="./index.html"><img src="./img/bikcraft.svg" alt="Logo Bikcraft"/></a>
                <nav aria-label="primaria">
                    <ul class="header-menu font-1-m cor-0">
                        <li><a href="./bicicletas.html">Bicicletas</a></li>
                        <li><a href="./seguros.html">Seguros</a></li>
                        <li><a href="./contato.html">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <div class="titulo-bg">
                <div class="titulo container">
                    <p class="font-2-l-b cor-5">Escolha a melhor para você.</p>
                        <h1 class="font-1-xxl cor-0">Termos e Condições<span class="cor-p1">.</span></h1>
                </div>
            </div>
                    <div class="bicicletas container">
                        <div class="bicicletas-imagem">
                            <img src="./img/bicicletas/nimbus.jpg" alt="Bicicleta Preta"/>
                            <span class="font-2-m cor-0">R$ 4999</span>
                        </div>
                        <div class="bicicletas-conteudo">
                            <h2 class="font-1-xl">Nimbus Stark</h2>
                            <p class="font-2-s cor-8">A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.</p>
                            <ul class="font-1-m cor-8">
                                    <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                                    <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                                    <li><img src="./img/icones/velocidade.svg" alt=""/>50 Km/h</li>
                                    <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                            </ul>
                            <a class="botao seta" href="./bicicletas/nimbus.html">Mais Sobre</a>
                        </div>
                    </div>
            
            <div class="bicicletas-bg">
                <div class="bicicletas container">
                    <div class="bicicletas-imagem">
                        <img src="./img/bicicletas/magic.jpg" alt="Bicicleta Preta"/>
                        <span class="font-2-m cor-0">R$ 4999</span>
                    </div>
                    <div class="bicicletas-conteudo">
                        <h2 class="font-1-xl cor-0">Magic Might</h2>
                        <p class="font-2-s cor-5">A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.</p>
                        <ul class="font-1-m cor-5">
                                <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                                <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                                <li><img src="./img/icones/velocidade.svg" alt=""/>45 Km/h</li>
                                <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                        </ul>
                        <a class="botao seta" href="../bicicletas/magic.html">Mais Sobre</a>
                    </div>
                </div>
        </div>

            <div class="bicicletas container">
                <div class="bicicletas-imagem">
                    <img src="./img/bicicletas/nebula.jpg" alt="Bicicleta Preta"/>
                    <span class="font-2-m cor-0">R$ 3999</span>
                </div>
                <div class="bicicletas-conteudo">
                    <h2 class="font-1-xl">Nebula Cosmic</h2>
                    <p class="font-2-s cor-8">A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.</p>
                    <ul class="font-1-m cor-8">
                            <li><img src="./img/icones/eletrica.svg" alt=""/>Motor Elétrico</li>
                            <li><img src="./img/icones/carbono.svg" alt=""/>Fibra de Carbono</li>
                            <li><img src="./img/icones/velocidade.svg" alt=""/>50 Km/h</li>
                            <li><img src="./img/icones/rastreador.svg" alt=""/>Rastreador</li>
                    </ul>
                    <a class="botao seta" href="./bicicletas/nebula.html">Mais Sobre</a>
                </div>
            </div>

        </main>

        <footer class="footer-bg">
            <div class="footer container">
                <img src="./img/bikcraft.svg" alt="Bikcraft"/>
                <div class="footer-contato">
                    <h3 class="font-2-l-b cor-0">Contato</h3>
                    <ul class="font-2-m cor-5">
                        <li><a href="tel:+55 21 98878-9908">+55 21 98878-9908</a></li>
                        <li><a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a></li>
                        <li>Rua Ali Perto, 42 - Botafogo</li>
                        <li>Rio de Janeiro - RJ</li>
                    </ul> 
                    <div class="footer-redes">
                        <a href="/">
                            <img src="./img/redes/instagram.svg" alt="Instagram"/>
                        </a>
                        <a href="/">
                            <img src="./img/redes/facebook.svg" alt="Facebook"/>
                        </a>
                        <a href="/">
                            <img src="./img/redes/youtube.svg" alt="Youtube"/>
                        </a>
                    </div>
                </div>
                <div class="footer-informacoes">
                    <h3 class="font-2-l-b cor-0">Informações</h3>
                    <nav>
                        <ul class="font-1-m cor-5">
                        <li><a href="./bicicletas.html">Bicicletas</a></li>
                        <li><a href="./seguros.html">Seguros</a></li>
                        <li><a href="./contatos.html">Contato</a></li>
                        <li><a href="./termos.html">Termos e Condições</a></li>
                        </ul>
                    </nav>
                </div>
                <p class="footer-copy font-2-m cor-6">Bikcraft &copy alguns direitos reservados.</p>    
            </div>
        </footer>

        <script src="./js/script.js"></script>
        </body>
    );
    }
export default BicyclePage;