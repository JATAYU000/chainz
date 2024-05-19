import './css/LandingPage.css';

const GearlessPage = () => {
    return (
        <body id="bicicleta">
        <header class="header-bg">
            <div class="header container">
            <a href="/"><img height = "45" src="./img/chainz.png" alt="Logo Bikcraft"/></a>
                <nav aria-label="primaria">
                    <ul class="header-menu font-1-m cor-0">
                    <li><a href="./bicycles">Bicycles</a></li>
                        <li><a href="./contact">Contact</a></li>
                        <li><a href="./buy">Purchase</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <div class="titulo-bg">
                <div class="titulo container">
                    <p class="font-2-l-b cor-5">CHOOSE THE BEST ONE FOR YOU.</p>
                        <h1 class="font-1-xxl cor-0">The Only Limitation Is Your Wallet<span class="cor-p1">.</span></h1>
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
                            <a class="botao seta" href="./bicicletas/nimbus.html">About</a>
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
                        <a class="botao seta" href="../bicicletas/magic.html">About</a>
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
                    <a class="botao seta" href="./bicicletas/nebula.html">About</a>
                </div>
            </div>

        </main>
        

        <footer class="footer-bg">
            <div class="footer container">
            <a href="/"><img height = "45" src="./img/chainz.png" alt="Logo Bikcraft"/></a>
                <div class="footer-contato">
                    <h3 class="font-2-l-b cor-0">Contacts</h3>
                    <ul class="font-2-m cor-5">
                        <li><a href="tel:+91 6996420024">+91 6996420024</a></li>
                        <li><a href="mailto:contact@chainz.com">contact@chainz.com</a></li>
                        <li>1600 Pennsylvania Avenue NW</li>
                        <li>Washington, D.C.</li>
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
                    <h3 class="font-2-l-b cor-0">Information</h3>
                    <nav>
                        <ul class="font-1-m cor-5">
                        <li><a href="/bicycles">Bicycle</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/buy">Purchase</a></li>
                        </ul>
                    </nav>
                </div>
                <p class="footer-copy font-2-m cor-6">Made by me. All rigths reserved.</p>    
            </div>
        </footer>

        <script src="./js/script.js"></script>
        </body>
    );
    }
export default GearlessPage;